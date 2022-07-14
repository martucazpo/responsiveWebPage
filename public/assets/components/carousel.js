import { imgSrcs } from "../images/index.js";

const state = {
    slides : [],
    dots : []
}

let slideIndex = 1;

// based on: https://www.w3schools.com/howto/howto_js_slideshow.asp

const carousel = document.createElement("section");
carousel.classList = "slideshow-container";

for (let i = 0; i < imgSrcs.length; i++) {
  const mySlides = document.createElement("div");
  mySlides.classList = "mySlides fade";
  const numberText = document.createElement("div");
  numberText.classList = "numbertext";
  numberText.innerText = i + 1 + " / " + imgSrcs.length;
  mySlides.append(numberText);
  const myImg = document.createElement("img");
  myImg.setAttribute("src", imgSrcs[i][0]);
  myImg.setAttribute("alt", imgSrcs[i][3]);
  mySlides.append(myImg);
  const myProjectLink = document.createElement("div");
  myProjectLink.classList = "text";
  const myProjectAnchor = document.createElement("a");
  myProjectAnchor.setAttribute("href", imgSrcs[i][1]);
  myProjectAnchor.setAttribute("target", "_blank");
  myProjectAnchor.innerText = imgSrcs[i][2];
  myProjectLink.append(myProjectAnchor);
  mySlides.append(myProjectLink);
  carousel.append(mySlides)
}

let slides = [...carousel.childNodes];

const prev = document.createElement("a");
prev.classList = "prev";
prev.innerHTML = "&#10094";
carousel.append(prev);

const next = document.createElement("a");
next.classList = "next";
next.innerHTML = "&#10095";
carousel.append(next);

const br = document.createElement("br");
carousel.append(br);

const dotDiv = document.createElement("div");
dotDiv.style = "textAlign:center";
for (let i = 0; i < imgSrcs.length; i++) {
  const dot = document.createElement("span");
  dot.classList = "dot";
  dotDiv.append(dot);
}
carousel.append(dotDiv);
let dots = [...dotDiv.childNodes];

next.addEventListener("click", ()=>plusSlides(1))
prev.addEventListener("click",()=> plusSlides(-1))

for(let i = 0; i < dots.length; i++){
    dots[i].addEventListener("click", ()=> currentSlide(i + 1))
}

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  //let slides = [...carousel.childNodes];
  //let dots = [...dotDiv.childNodes];
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  slides[slideIndex - 1].style.alignItems = "center";
  slides[slideIndex - 1].style.justifyContent = "center";
  dots[slideIndex - 1].className += " active";
}

function setCarousel() {
  galleryContentDiv.append(carousel);
}

export function makeCarousel() {
  const galleryContentDiv = document.getElementById("galleryContentDiv");
  setCarousel();
  showSlides(slideIndex)
}
