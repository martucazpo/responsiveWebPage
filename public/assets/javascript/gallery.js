import { navigate } from "../components/navbar.js";
import { makeCarousel } from "../components/carousel.js";
import { makePortrait } from "../components/portraitGallery.js";
const state = {
  window: window.innerWidth,
};
navigate();

function renderGallery() {
  state.window = window.innerWidth;
  if (state.window >= 1000) {
    if (document.getElementById("galleryContentDiv").innerHTML) {
      document.getElementById("galleryContentDiv").innerHTML = "";
    }
    document.querySelector("main").style.backgroundColor = "";
    document.querySelector("main").style.background =
      "linear-gradient(rgb(218, 186, 3),rgb(169, 123, 9),rgb(150, 112, 16))";
    return makePortrait();
  } else if (state.window < 1000) {
    if (document.getElementById("galleryContentDiv").innerHTML) {
      document.getElementById("galleryContentDiv").innerHTML = "";
    }
    document.querySelector("main").style.background = "";
    document.querySelector("main").style.backgroundColor = "rgb(18, 18, 18)";
    document.querySelector("main").style.overflow = "";
    return makeCarousel();
  }
}
renderGallery();
window.addEventListener("resize", renderGallery);
