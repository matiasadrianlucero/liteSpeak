import { contactsUI } from "./contacts/contactsUI"
import { conversationsUI } from "./conversations/conversationsUI"
function agendaUI(){    
    let agendaDiv=document.getElementById("agendaDiv")
    agendaDiv.innerHTML=""
    let agendaButtonsDiv=document.createElement("div")
    agendaButtonsDiv.id="agendaButtonsDiv"
    let conversationsButton=document.createElement("button")
    conversationsButton.innerHTML="Conversations"
    conversationsButton.onclick=function(){
        conversationsUI()
    }
    let contactsButton=document.createElement("button")
    contactsButton.innerHTML="Contacts"
    contactsButton.onclick=function(){
        contactsUI()
    }
    agendaButtonsDiv.appendChild(conversationsButton)
    agendaButtonsDiv.appendChild(contactsButton)

    let agendaMainDiv=document.createElement("div")
    agendaMainDiv.id="agendaMainDiv"

    let agendaSearchDiv=document.createElement("div")
    agendaSearchDiv.id="agendaSearchDiv"

    agendaDiv.appendChild(agendaButtonsDiv)
    agendaDiv.appendChild(agendaMainDiv)
    agendaDiv.appendChild(agendaSearchDiv)

    contactsUI()
}
export {agendaUI}