import { logout } from "./logout/logout"
import { userDetails } from "./userDetails/userDetailsUI"
import { agendaUI } from "./agenda/agendaUI"
function loggedInUI(){
    document.body.innerHTML=""

    let headerDiv=document.createElement("div")
    headerDiv.id="headerDiv"

    let mainDiv=document.createElement("div")
    mainDiv.id="mainDiv"

    let agendaDiv=document.createElement("div")
    agendaDiv.id="agendaDiv"

    let bodyDiv=document.createElement("div")
    bodyDiv.id="bodyDiv"

    mainDiv.appendChild(agendaDiv)
    mainDiv.appendChild(bodyDiv)

    document.body.appendChild(headerDiv)
    document.body.appendChild(mainDiv)

    userDetails()
    agendaUI()
}
export {loggedInUI}