// script.js

document.addEventListener("DOMContentLoaded", function () {
    const ratingNumbers = document.querySelectorAll(".rating-number");
    const submitBtn = document.getElementById("submit-btn");
    const userRating = document.getElementById("user-rating");
    const ratingCard = document.getElementById("rating-card");
    const thankYouCard = document.getElementById("thank-you-card");

    let selectedRating = null;

    // Add event listeners to each rating number
    ratingNumbers.forEach((rating) => {
        rating.addEventListener("click", function () {
            // Remove the highlight from all rating numbers
            ratingNumbers.forEach((r) => r.classList.remove("bg-orange-500"));
            // Add the highlight to the selected rating number
            this.classList.add("bg-orange-500");
            selectedRating = this.getAttribute("data-rating");
        });
    });

    // Handle submit button click
    submitBtn.addEventListener("click", function () {
        if (selectedRating) {
            // Show thank you card
            userRating.textContent = selectedRating;
            ratingCard.classList.add("hidden");
            thankYouCard.classList.remove("hidden");
        } else {
            alert("Please select a rating before submitting!");
        }
    });
});
