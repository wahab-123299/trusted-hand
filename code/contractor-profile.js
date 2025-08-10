document.addEventListener("DOMContentLoaded", () => {
  const reviewForm = document.getElementById("reviewForm");
  const contractorSelect = document.getElementById("contractor");
  const ratingInput = document.getElementById("rating");
  const feedbackInput = document.getElementById("feedback");
  const anonymousCheckbox = document.getElementById("anonymous");
  const reviewList = document.getElementById("reviewList");
  const reviewStats = document.getElementById("reviewStats");
  const avgRatingDisplay = document.getElementById("avgRating");
  const totalReviewsDisplay = document.getElementById("totalReviews");

  // Store reviews per contractor
  const reviewsByContractor = {};

  // Handle form submission
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const contractor = contractorSelect.value;
    const rating = parseInt(ratingInput.value);
    const feedback = feedbackInput.value.trim();
    const postedBy = anonymousCheckbox.checked ? "Anonymous" : "Guest";

    if (!rating || !feedback) {
      alert("Please provide both a rating and feedback.");
      return;
    }

    const newReview = { rating, feedback, postedBy };

    // Initialize contractor array if needed
    if (!reviewsByContractor[contractor]) {
      reviewsByContractor[contractor] = [];
    }

    reviewsByContractor[contractor].push(newReview);
    updateReviewDisplay(contractor);
    reviewForm.reset();
    alert("Thanks for your feedback!");
  });

  // Update review display for selected contractor
  function updateReviewDisplay(contractor) {
    const reviews = reviewsByContractor[contractor] || [];
    reviewList.innerHTML = "";

    let total = 0;
    reviews.forEach((review) => {
      total += review.rating;
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${"★".repeat(review.rating)}</strong> – ${review.feedback}
        <br><small>By ${review.postedBy}</small>
      `;
      reviewList.appendChild(li);
    });

    const avg = reviews.length ? (total / reviews.length).toFixed(1) : 0;
    reviewStats.textContent = `Average Rating: ${avg} ★ | ${reviews.length} Review${reviews.length !== 1 ? "s" : ""}`;

    // If this contractor is the one on the profile page, update top summary
    const profileContractor = "Oladimeji"; // Match this to your profile name
    if (contractor === profileContractor) {
      avgRatingDisplay.textContent = `Average Rating: ${avg} ★`;
      totalReviewsDisplay.textContent = `(${reviews.length} reviews)`;
    }
  }

  // Optional: auto-load reviews for profile contractor
  updateReviewDisplay("Oladimeji");
});
