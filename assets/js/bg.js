let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
        slides[i].style.zIndex = "0"; // Set default zIndex
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to first slide
    }
    slides[slideIndex - 1].style.display = "block"; // Show current slide
    // console.log(slides[slideIndex -1 ])
    setTimeout(showSlides, 5000); // Change slide every 3 seconds
}
