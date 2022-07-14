import { navigate } from "../components/navbar.js";
import { buildSmallBusiness } from "../components/smallBusiness.js"
import { runBigBusiness } from "../components/bigBusiness.js"

const state = {
    window: window.innerWidth
}

navigate()

window.addEventListener("resize", keepBusinessUpAndRunning)

function keepBusinessUpAndRunning(){
    state.window = window.innerWidth
    if(state.window < 900){
        if(document.getElementById("businessContentDiv").innerHTML){
            document.getElementById("businessContentDiv").innerHTML = ""
        }
        buildSmallBusiness()
    } else {
        if(document.getElementById("businessContentDiv").innerHTML){
            document.getElementById("businessContentDiv").innerHTML = ""
        }
        runBigBusiness()
    }
}
keepBusinessUpAndRunning()
