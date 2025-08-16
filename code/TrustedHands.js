// trustedhand.js

document.addEventListener("DOMContentLoaded", () => {
  // Handle Join Guild buttons
  const joinButtons = document.querySelectorAll(".btn.primary");

  joinButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      const guildName = button.closest(".guild-profile")?.querySelector("h1")?.textContent || "Guild";
      alert(`You've joined the ${guildName}! 🎉`);
    });
  });

  // Highlight active nav link
  const navLinks = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname;

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage || currentPage.endsWith(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });

  // Optional: Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
