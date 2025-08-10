document.addEventListener("DOMContentLoaded", () => {
  const contractorId = getContractorIdFromURL();

  if (!contractorId) {
    document.querySelector("main").innerHTML = "<p>Contractor ID not found in URL.</p>";
    return;
  }

  fetch(`/api/contractors/${contractorId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Contractor not found");
      }
      return response.json();
    })
    .then(data => populateBioAndReviews(data))
    .catch(error => {
      console.error(error);
      document.querySelector("main").innerHTML = "<p>Unable to load contractor profile.</p>";
    });
});

// Extract contractor ID from URL
function getContractorIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

// Populate profile and reviews
function populateBioAndReviews(data) {
  document.getElementById("contractorImg").src = data.photo || "default.jpg";
  document.getElementById("contractorName").textContent = data.name;
  document.getElementById("contractorDetails").textContent = `${data.trade} • ${data.experience} years • Based in ${data.location}`;
  document.getElementById("contractorBio").textContent = data.bio;

  const reviewList = document.getElementById("reviewList");
  reviewList.innerHTML = "";

  if (data.reviews && data.reviews.length > 0) {
    data.reviews.forEach(review => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${"★".repeat(review.rating)}</strong> – ${review.text}
        <br><small>By ${review.author || "Anonymous"}</small>
      `;
      reviewList.appendChild(li);
    });
  } else {
    reviewList.innerHTML = "<li>No reviews yet.</li>";
  }

  // Optional: update average rating
  const avgRating = data.reviews?.length
    ? (data.reviews.reduce((sum, r) => sum + r.rating, 0) / data.reviews.length).toFixed(1)
    : "0.0";
  document.getElementById("reviewStats").textContent = `Average Rating: ⭐ ${avgRating} (${data.reviews?.length || 0} reviews)`;
}
