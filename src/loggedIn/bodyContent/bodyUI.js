import { notification } from "../elements/notification"
import { introUI } from "./intro/introUI"

export function bodyUI(){
    let loggedInUI=document.getElementById("loggedInUI")

    let bodyDiv=document.createElement("div")
    bodyDiv.id="bodyDiv"

    loggedInUI.appendChild(bodyDiv)
    introUI()
}