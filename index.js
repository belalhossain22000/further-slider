{/* <script> */}
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    speed: 500,  
    grabCursor: true,
});
// Get the button elements
var prevButton = document.getElementById('prevBtn');
var nextButton = document.getElementById('nextBtn');

// Add click event listeners to the buttons
prevButton.addEventListener('click', function () {
    swiper.slidePrev();
});

nextButton.addEventListener('click', function () {
    swiper.slideNext();
});
{/* </script> */}