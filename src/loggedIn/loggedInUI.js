import { sideBarUI } from "./sideBar/sideBarUI"
import { bodyUI } from "./bodyContent/bodyUI"
import { backgroundStyling } from "../backgroundAnimation/backgroundStyling"
function loggedInUI(){
    const landingBody=document.getElementById("landingBody")
    if (landingBody){
        landingBody.remove()
    }
    const stylingContainer=document.getElementById("stylingContainer")
    if (!stylingContainer){
        backgroundStyling()
    }
    let loggedInUI=document.createElement("div")
    loggedInUI.id="loggedInUI"

    document.body.appendChild(loggedInUI)
    
    sideBarUI()
    bodyUI()
}
export {loggedInUI}