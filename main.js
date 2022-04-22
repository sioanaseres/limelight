"use strict"
//new design ideas
const slides = document.querySelectorAll(".slide");
const btnBlack = document.querySelector(".btn-black");
const btnGreen = document.querySelector(".btn-green");

let currentSlide = 0;
const maxSlide = slides.length;


const goToSlide = function(slide){
    slides.forEach((s,i) => {
       
        s.style.transform = `translateX(${100 * (i-slide)}%)`
    })
}
goToSlide(0);

const nextSlide = function(){
    if(currentSlide === maxSlide -1){
        currentSlide = 0;
    } else{currentSlide++;}
    
    goToSlide(currentSlide);
}

const prevSlide = function(){
    if(currentSlide === 0){
        currentSlide = maxSlide -1 
    } else{    currentSlide--;}
 
    goToSlide(currentSlide);
}
btnGreen.addEventListener("click", nextSlide);

btnBlack.addEventListener("click", prevSlide);

//testimonial

const slidesTestimonial = document.querySelectorAll(".slide-testimonial");
const btnBlack2 = document.querySelector(".btn-black2");
const btnGreen2 = document.querySelector(".btn-green2");

let currentSlideTestimonial = 0;
const maxSlideTestimonial = slidesTestimonial.length;


const goToSlideTestimonial = function(slide){
    slidesTestimonial.forEach((s,i) => {
       
        s.style.transform = `translateX(${100 * (i-slide)}%)`
    })
}
goToSlideTestimonial(0);

const nextSlideTestimonial = function(){
    if(currentSlideTestimonial === maxSlideTestimonial -1){
        currentSlideTestimonial = 0;
    } else{currentSlideTestimonial++;}
    
    goToSlideTestimonial(currentSlideTestimonial);
}

const prevSlideTestimonial = function(){
    if(currentSlideTestimonial === 0){
        currentSlideTestimonial = maxSlideTestimonial -1 
    } else{    currentSlideTestimonial--;}
 
    goToSlideTestimonial(currentSlideTestimonial);
}
btnGreen2.addEventListener("click", nextSlideTestimonial);

btnBlack2.addEventListener("click", prevSlideTestimonial);