import { busSrcs } from "../images/index.js";
import { businessText } from "../data/businessText.js";

const bigBusiness = document.createElement("section");
bigBusiness.classList = "big-business";

const firstImgDiv = document.createElement("div");
firstImgDiv.classList = "img-div img-div1";
firstImgDiv.style.backgroundImage = "url(" + busSrcs[0][0] + ")";
bigBusiness.append(firstImgDiv);

const article1 = document.createElement("article");
article1.classList = "bb-article article1";
const artTit1 = document.createElement("h3");
artTit1.innerText = businessText[0][0];
article1.append(artTit1);
for (let i = 1; i < businessText[0].length; i++) {
  let busyPar = document.createElement("p");
  busyPar.innerText = businessText[0][i];
  article1.append(busyPar);
}
bigBusiness.append(article1);

const secondImgDiv = document.createElement("div");
secondImgDiv.classList = "img-div img-div2";
secondImgDiv.style.backgroundImage = "url(" + busSrcs[1][0] + ")";
bigBusiness.append(secondImgDiv);

const article2 = document.createElement("article");
article2.classList = "bb-article article2";
const artTit2 = document.createElement("h3");
artTit2.innerText = businessText[1][0];
article2.append(artTit2);
for (let i = 1; i < businessText[1].length; i++) {
  let busyPar = document.createElement("p");
  busyPar.innerText = businessText[1][i];
  article2.append(busyPar);
}
bigBusiness.append(article2);

const thirdImgDiv = document.createElement("div");
thirdImgDiv.classList = "img-div img-div3";
thirdImgDiv.style.backgroundImage = "url(" + busSrcs[2][0] + ")";
bigBusiness.append(thirdImgDiv);

export function runBigBusiness() {
  const businessContentDiv = document.getElementById("businessContentDiv");
  businessContentDiv.append(bigBusiness);
}
