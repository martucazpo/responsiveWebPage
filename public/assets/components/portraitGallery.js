import { imgSrcs } from "../images/index.js";

const portraitGallery = document.createElement("section");
portraitGallery.classList = "portrait-gallery";
for (let i = 0; i < imgSrcs.length; i++) {
  const portraitFrame = document.createElement("div");
  portraitFrame.classList = "portrait-frame " + "frame" + (i + 1);
  const portrait = document.createElement("div");
  portrait.classList = "portrait";
  const portraitImg = document.createElement("img");
  portraitImg.classList = "portrait-img";
  portraitImg.setAttribute("alt", imgSrcs[i][3]);
  portraitImg.setAttribute("src", imgSrcs[i][0]);
  portrait.append(portraitImg);
  const portraitCaption = document.createElement("div");
  portraitCaption.classList = "portrait-caption";
  const portraitLink = document.createElement("a");
  portraitLink.setAttribute("href", imgSrcs[i][1]);
  portraitLink.setAttribute("target", "_blank");
  portraitLink.innerText = imgSrcs[i][2];
  portraitCaption.append(portraitLink);
  portrait.append(portraitCaption);
  portraitFrame.append(portrait);
  portraitGallery.append(portraitFrame);
}

function setPortrait() {
  galleryContentDiv.append(portraitGallery);
}

export function makePortrait() {
  const galleryContentDiv = document.getElementById("galleryContentDiv");
  galleryContentDiv.style.width = "100vw";
  galleryContentDiv.style.margin = "1em 0";
  galleryContentDiv.style.height = "75vh";
  const main = document.querySelector("main");
  setPortrait();
}
