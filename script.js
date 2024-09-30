// console.log('page is working');

// document.addEventListener('DOMContentLoaded', () => {
//     const ratingCard = document.getElementById('rating-card');
//     const ratingNumbers = document.querySelectorAll('.rating-number');
//     const submitBtn = document.getElementById('submit-btn');
//     const thankYouCard = document.getElementById('thank-you-card');
//     const userRating = document.getElementById('user-rating');
//     let selectedRating = null;

//     // Handle rating selection
//     ratingNumbers.forEach(rating => {
//         rating.addEventListener('click', (e) => {
//             // Clear previous selection
//             // ratingNumbers.forEach(r => r.classList.remove('bg-orange-500', 'text-white'));
//             ratingNumbers.forEach(r => {
//                 r.classList.remove('bg-orange-500', 'text-white')
//                 // Testing
//                 console.log('Working')
//             });


//             // Highlight selected rating
//             e.target.classList.add('bg-orange-500', 'text-white');


//             selectedRating = e.target.dataset.rating;


//             console.log("Selected Rating:", selectedRating); 
//         });


//     });


// // ratingNumbers.forEach(rating => {} );
// // ratingNumbers.forEach(rating);
// // function rating () {};


// // ratingNumbers.forEach(r => {
// //     console.log(r); // এখানে প্রতিটি DOM এলিমেন্টকে দেখানো হবে
// //   });
  

// });

// document.addEventListener('DOMContentLoaded', () =>{
//     const ratingNumbers = document.querySelectorAll('.rating-number');

//     ratingNumbers.forEach(rating => {

//         rating.addEventListener('click', (e) => {
//             // ratingNumbers.forEach(r => r.classList.remove('bg-orange-500', 'text-white'));
//             // console.log('working 1');

//             ratingNumbers.forEach(r => {
//                 r.classList.remove('bg-orange-500', 'text-white')
//                 // Testing
//                 console.log('Working')
//             });
                
//         // hilight
//         e.target.classList.add('bg-orange-500', 'text-white');
//         console.log('working 2');

//         // selcted rating
//         selectedRating = e.target.dataset.rating;
        
//         console.log(selectedRating, 'working 3');


//     });


//     });

// });


document.addEventListener('DOMContentLoaded', () => {
    const ratingNumbers = document.querySelectorAll('.rating-number');
    const submitButton = document.getElementById('submit-btn');
    const ratingCard = document.getElementById('rating-card');
    const thankYouCard = document.getElementById('thank-you-card');
    const userRating = document.getElementById('user-rating');
    let selectedRating = null;

    ratingNumbers.forEach(rating => {
        rating.addEventListener('click', (e) => {
            ratingNumbers.forEach(r =>{
                r.classList.remove('bg-orange-500', 'text-white');
                console.log('Working 1');
            });

            // hilight selected
            e.target.classList.add('bg-orange-500', 'text-white');
            console.log('Working 2');

            // selectedRating
            selectedRating = e.target.dataset.rating;
            console.log(selectedRating);
        });
    });

    






});


