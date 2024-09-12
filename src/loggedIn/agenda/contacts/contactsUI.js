import { retrieveContacts } from "./retrieveContacts"
import { addContactUI } from "../../bodyContent/addContact/addContactUI"
function contactsUI(){
    let contacts=retrieveContacts()
    console.log(contacts)
    let agendaMainDiv=document.getElementById("agendaMainDiv")
    agendaMainDiv.innerHTML=""
    let addPerson=document.createElement("button")
    addPerson.innerHTML="+"
    addPerson.onclick=function(){
        addContactUI()
    }
    agendaMainDiv.appendChild(addPerson)

    contacts.map((map,index)=>{
        let contactDiv=document.createElement("div")
        let contactImage=document.createElement("img")
        contactImage.src=map[0]
        let contactName=document.createElement("p")
        contactName.innerHTML=map[1]

        contactDiv.appendChild(contactImage)
        contactDiv.appendChild(contactName)
        agendaMainDiv.appendChild(contactDiv)
    })


    
    let agendaSearchDiv=document.getElementById("agendaSearchDiv")
    agendaSearchDiv.innerHTML=""
    let searchInput=document.createElement("input")
    searchInput.id="updateEmailInput"
    searchInput.type = "text";
    searchInput.placeholder = "Email";

    agendaSearchDiv.appendChild(searchInput)

}
export {contactsUI}