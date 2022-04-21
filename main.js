"use strict"

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