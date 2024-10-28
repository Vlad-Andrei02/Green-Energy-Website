'use strict';

/**
 *  #HEADER
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-go-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/* #SCROLL REVEAL*/

const revealElements = document.querySelectorAll("[data-reveal]");  

const scrollReveal = function () {
  for (let i = 0, x = revealElements.length; i < x; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");  //Aceasta declanșează efectele CSS asociate cu afișarea elementului (cum ar fi modificarea opacității și tranziția).
    } else {
      revealElements[i].classList.remove("revealed");  
    }
  }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
