import { navigate } from "./components/navbar.js";
import { renderLittleOleMe } from "./components/lilOleMe.js";
import { makeMeBig } from "./components/bigOleMe.js";

const state = {
  window: window.innerWidth,
};

navigate();

window.addEventListener("resize", makeBigOrSmall);

function makeBigOrSmall() {
  const meMeMeDiv = document.getElementById("meMeMeDiv");
  state.window = window.innerWidth;
  if (state.window > 900) {
    if (meMeMeDiv.innerHTML) {
      meMeMeDiv.innerHTML = "";
    }
    makeMeBig();
  } else {
    if (meMeMeDiv.innerHTML) {
      meMeMeDiv.innerHTML = "";
    }
    renderLittleOleMe();
  }
}

makeBigOrSmall();
