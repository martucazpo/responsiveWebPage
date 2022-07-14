import { personalSrcs } from "../images/index.js"
import { personalText } from "../data/personalText.js"


const littleMe = document.createElement("section")
littleMe.classList = "lm-container"

const myFirstImage = document.createElement("figure")
myFirstImage.classList = "lm-figure"
const img1 = document.createElement("img")
img1.classList = "lm-img"
img1.setAttribute("src", personalSrcs[1][0])
img1.setAttribute("alt", personalSrcs[1][2])
myFirstImage.append(img1)
const myCapt1 = document.createElement("small")
myCapt1.classList = "lm-caption"
myCapt1.innerText = personalSrcs[1][1]
myFirstImage.append(myCapt1)

littleMe.append(myFirstImage)

const article1 = document.createElement("article")
article1.classList = "lm-article"
let artTitle1 = document.createElement("h3")
artTitle1.classList = "lm-article-title"
artTitle1.innerText = personalText[0][0]
article1.append(artTitle1)

for(let i = 1; i < personalText[0].length; i++){
    let lmArtp = document.createElement("p")
    lmArtp.innerText = personalText[0][i]
    article1.append(lmArtp)
}

littleMe.append(article1)

const mySecondImage = document.createElement("figure")
mySecondImage.classList = "lm-figure"
const img2 = document.createElement("img")
img2.classList = "lm-img"
img2.setAttribute("src", personalSrcs[0][0])
img2.setAttribute("alt", personalSrcs[0][2])
mySecondImage.append(img2)
const myCapt2 = document.createElement("small")
myCapt2.classList = "lm-caption"
myCapt2.innerText = personalSrcs[0][1]
mySecondImage.append(myCapt2)

littleMe.append(mySecondImage)

const article2 = document.createElement("article")
article2.classList = "lm-article"
let artTitle2 = document.createElement("h3")
artTitle2.classList = "lm-article-title"
artTitle2.innerText = personalText[1][0]
article2.append(artTitle2)

for(let i = 1; i < personalText[1].length; i++){
    let lmArtp = document.createElement("p")
    lmArtp.innerText = personalText[1][i]
    article2.append(lmArtp)
}

littleMe.append(article2)


export function renderLittleOleMe(){
    const meMeMeDiv = document.getElementById("meMeMeDiv")
    meMeMeDiv.append(littleMe)
}