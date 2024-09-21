import { sideBarUI } from "./sideBar/sideBarUI"
import { bodyUI } from "./bodyContent/bodyUI"
function loggedInUI(){
    document.body.innerHTML=""
    
    let loggedInUI=document.createElement("div")
    loggedInUI.id="loggedInUI"

    document.body.appendChild(loggedInUI)
    
    sideBarUI()
    bodyUI()
}
export {loggedInUI}