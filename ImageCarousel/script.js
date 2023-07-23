//set initial slide index = 0
var slideIndex = 0;

//get all image elements
var slides = document.getElementsByClassName('slide-image');

//function to show the current slide
function showSlide()
{
    //hide all slides
    for(var i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }

    //display the current slide
    slides[slideIndex].style.display = "block";
}

//function to show the previous slide
function prev(){
    //decrease the slide index
    slideIndex--;

    //wrap around the last slide if index goes below 0
    if(slideIndex<0){
        slideIndex = slides.length - 1;
    }

    //show the updated slide
    showSlide();
}

//function to show the next slide
function next(){
    //increase the slide index
    slideIndex++;

    //wrap around to the first slide if index goes beyond the last slide
    if(slideIndex >= slides.length){
        slideIndex = 0;
    }

    //show the updated slides
    showSlide();
}

//function to automate slides
function startSlide(){
    setInterval(next, 5000);
}

//call the showSlide function initially to display the fist slide
showSlide();

//start the slide
startSlide();