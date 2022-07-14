import { busSrcs } from "../images/index.js";
import {  businessText } from "../data/businessText.js";

const smallBusiness = document.createElement("section")
smallBusiness.classList = "smb-container";

const firstPicture = document.createElement("figure")
firstPicture.classList = "smb-fig"
const firstImg = document.createElement("img")
firstImg.classList = "sb-img img-1"
firstImg.setAttribute("src", busSrcs[2][0])
firstImg.setAttribute("alt", busSrcs[2][2])
const firstCapt = document.createElement("small")
firstCapt.classList = "sb-small"
firstCapt.innerText = busSrcs[2][1]
firstPicture.append(firstImg)
firstPicture.append(firstCapt)

const secondPicture = document.createElement("figure")
secondPicture.classList = "smb-fig"
const secondImg = document.createElement("img")
secondImg.classList = "sb-img img-2"
secondImg.setAttribute("src", busSrcs[0][0])
secondImg.setAttribute("alt", busSrcs[0][2])
const secondCapt = document.createElement("small")
secondCapt.classList = "sb-small"
secondCapt.innerText = busSrcs[0][1]
secondPicture.append(secondImg)
secondPicture.append(secondCapt)

const smbArticle1 = document.createElement("article")
smbArticle1.classList = "smb-article"

smallBusiness.append(firstPicture)
let artTitle1 = document.createElement("h3")
artTitle1.classList = "smb-article-title"
artTitle1.innerText = businessText[0][0]
smbArticle1.append(artTitle1)

for(let i = 1; i < businessText[0].length; i++){
   let artPara = document.createElement("p")
   artPara.innerText = businessText[0][i]
    smbArticle1.append(artPara) 
}
smallBusiness.append(smbArticle1)

const smbArticle2 = document.createElement("article")
smbArticle2.classList = "smb-article"
            
smallBusiness.append(secondPicture)
let artTitle2 = document.createElement("h3")
artTitle2.classList = "smb-article-title"
artTitle2.innerText = businessText[1][0]
smbArticle2.append(artTitle2)

for(let i = 1; i < businessText[1].length; i++){
    let artPara = document.createElement("p")
    artPara.innerText = businessText[1][i]
    smbArticle2.append(artPara)
}
            
smallBusiness.append(smbArticle2)


function setSmallBusiness(){
    const businessContentDiv = document.getElementById("businessContentDiv")
    businessContentDiv.append(smallBusiness)
}

export function buildSmallBusiness(){
    setSmallBusiness()
}