
// JS for making our slideshow slide images

// var slideIndex = 1;
// showSlide(slideIndex);

var slideIndex = 0;
showSlide();


function showSlide() {
    var i;
    var slide = document.getElementsByClassName("mySlide");
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slide.length) {slideIndex = 1} 
    slide[slideIndex-1].style.display = "block"; 
    setTimeout(showSlide, 3500); // Change image every 2 seconds
}