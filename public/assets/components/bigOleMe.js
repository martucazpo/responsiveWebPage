import { personalText } from "../data/personalText.js"
import { personalSrcs } from "../images/index.js"

const bigMe = document.createElement("section")
bigMe.classList = "bgMe"

const bmFirstImg = document.createElement("figure")
bmFirstImg.classList = "bm-figure fig-1"
const img1 = document.createElement("img")
img1.classList = "bm-img"
img1.setAttribute("src", personalSrcs[1][0])
img1.setAttribute("alt", personalSrcs[1][2])
bmFirstImg.append(img1)
const capt1 = document.createElement("small")
capt1.innerText = personalSrcs[1][1]
bmFirstImg.append(capt1)

const bmSecondImg = document.createElement("figure")
bmSecondImg.classList = "bm-figure fig-2"
const img2 = document.createElement("img")
img2.classList = "bm-img"
img2.setAttribute("src", personalSrcs[0][0])
img2.setAttribute("alt", personalSrcs[0][2])
bmSecondImg.append(img2)
const capt2 = document.createElement("small")
capt2.innerText = personalSrcs[0][1]
bmSecondImg.append(capt2)

const bmThirdImg = document.createElement("figure")
bmThirdImg.classList = "bm-figure fig-3"
const img3 = document.createElement("img")
img3.classList = "bm-img"
img3.setAttribute("src", personalSrcs[2][0])
img3.setAttribute("alt", personalSrcs[2][2])
bmThirdImg.append(img3)
const capt3 = document.createElement("small")
capt3.innerText = personalSrcs[2][1]
bmThirdImg.append(capt3)

const bmArticleOne = document.createElement("article")
bmArticleOne.classList = "bm-article article1"
const bmArtTitle1 = document.createElement("h3")
bmArtTitle1.innerText = personalText[0][0]
bmArticleOne.append(bmArtTitle1)
for(let i = 1; i < personalText[0].length; i++){
    let bmPar = document.createElement("p")
    bmPar.innerText = personalText[0][i]
    bmArticleOne.append(bmPar)
}

const bmArticleTwo = document.createElement("article")
bmArticleTwo.classList = "bm-article article2"
const bmArtTitle2 = document.createElement("h3")
bmArtTitle2.innerText = personalText[1][0]
bmArticleTwo.append(bmArtTitle2)
for(let i = 1; i < personalText[1].length; i++){
    let bmPar = document.createElement("p")
    bmPar.innerText = personalText[1][i]
    bmArticleTwo.append(bmPar)
}

bigMe.append(bmFirstImg)
bigMe.append(bmArticleOne)
bigMe.append(bmSecondImg)
bigMe.append(bmArticleTwo)
bigMe.append(bmThirdImg)


export function makeMeBig(){
    const meMeMeDiv = document.getElementById("meMeMeDiv")
    meMeMeDiv.append(bigMe)
}