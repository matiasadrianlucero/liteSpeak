import {retrieveContacts} from "./retrieveContacts"
import { chatUI } from "../bodyContent/chatUI/chatUI"
import { friendRequestUI } from "../friendRequest/friendRequestUI"
function contactsUI(){
    // let contacts=retrieveContacts()
    let agendaMainDiv=document.getElementById("contactsDiv")
    agendaMainDiv.innerHTML=""
    ////Add Button
    let addPerson=document.createElement("button")
    addPerson.innerHTML="+"
    addPerson.onclick=function(){
        friendRequestUI()
    }
    agendaMainDiv.appendChild(addPerson)
    console.log(retrieveContacts())

    let contacts=retrieveContacts()

    contacts.then(function(data){
        
        data.map((map,index)=>{
            let contactDiv=document.createElement("div")
            let contactImage=document.createElement("img")
            contactImage.src=map[1]
            let contactName=document.createElement("p")
            contactName.innerHTML=map[0]
            console.log(map)
            contactName.onclick=function(){
                chatUI(map)
            }
            contactDiv.appendChild(contactImage)
            contactDiv.appendChild(contactName)
            agendaMainDiv.appendChild(contactDiv)
        })
        ////Render Search Input
        let searchInput=document.createElement("input")
        searchInput.id="updateEmailInput"
        searchInput.type = "text";
        searchInput.placeholder = "Email";
        ////Append Contacts
        agendaMainDiv.appendChild(searchInput)
    })


}
export {contactsUI}