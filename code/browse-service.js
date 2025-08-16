document.addEventListener("DOMContentLoaded", () => {
  // 1. Grab DOM elements
  const searchBox      = document.getElementById("searchBox");
  const guildFilter    = document.getElementById("guildFilter");
  const rankFilter     = document.getElementById("rankFilter");
  const locationFilter = document.getElementById("locationFilter");
  const serviceGrid    = document.getElementById("serviceGrid");
  const noResults      = document.getElementById("noResults");
  let cards = []; // will hold references to all rendered cards

  // 2. Utility: Capitalize first letter
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // 3. Utility: Escape HTML to prevent injection
  function escapeHTML(str) {
    return str.replace(/[&<>"']/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }[tag]));
  }

  // 4. Fetch services from your API and render them
  async function loadServices() {
    try {
      noResults.textContent = "Loading services…";
      noResults.classList.remove("hidden");

      const res = await fetch("/api/services");
      const services = await res.json();

      serviceGrid.setAttribute("role", "list");

      services.forEach(svc => {
        const icon     = escapeHTML(svc.icon || "🛠️");
        const title    = escapeHTML(svc.title || "Untitled Service");
        const provider = escapeHTML(svc.provider || "Unknown");
        const rank     = escapeHTML(svc.rank || "novice");
        const location = escapeHTML(svc.location || "lagos");
        const price    = svc.price ? `₦${svc.price}` : "Price not listed";

        const card = document.createElement("div");
        card.classList.add("service-card");
        card.setAttribute("role", "listitem");
        card.dataset.guild    = svc.guild;
        card.dataset.rank     = svc.rank;
        card.dataset.location = svc.location;

        card.innerHTML = `
          <h3>${icon} ${title}</h3>
          <p>By: ${provider} | ${capitalize(rank)}</p>
          <p>Location: ${capitalize(location)} | Price: ${price}</p>
          <a href="/jobs/${svc.id}" class="btn primary">📬 Request Service</a>
        `;

        serviceGrid.appendChild(card);
        cards.push(card);
      });

      filterServices(); // Apply filters after rendering
    } catch (err) {
      console.error("Error loading services:", err);
      noResults.textContent = "Unable to load services. Please try again later.";
      noResults.classList.remove("hidden");
    }
  }

  // 5. Filter logic
  function filterServices() {
    const term      = searchBox.value.trim().toLowerCase();
    const guild     = guildFilter.value;
    const rank      = rankFilter.value;
    const location  = locationFilter.value;
    let visibleCount = 0;

    cards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const matches =
        title.includes(term) &&
        (guild    === "" || card.dataset.guild    === guild) &&
        (rank     === "" || card.dataset.rank     === rank) &&
        (location === "" || card.dataset.location === location);

      card.style.display = matches ? "block" : "none";
      if (matches) visibleCount++;
    });

    noResults.textContent = visibleCount === 0
      ? "No services match your criteria."
      : "";
    noResults.classList.toggle("hidden", visibleCount > 0);
  }

  // 6. Wire up event listeners
  searchBox.addEventListener("input", filterServices);
  guildFilter.addEventListener("change", filterServices);
  rankFilter.addEventListener("change", filterServices);
  locationFilter.addEventListener("change", filterServices);

  // 7. Kick things off
  loadServices();
});
