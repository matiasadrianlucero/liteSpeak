import { retrieveConversations } from "./retrieveConversations"
import { displayChatUI } from "../../bodyContent/displayConversation/displayChatUI"
import { addContactUI } from "../../bodyContent/addContact/addContactUI"
export function conversationsUI(){
    let agendaMainDiv=document.getElementById("agendaMainDiv")
    agendaMainDiv.innerHTML=""
    let conversations=retrieveConversations()
    conversations.then(function(data){
        let agendaMainDiv=document.getElementById("agendaMainDiv")
        agendaMainDiv.innerHTML=""

        data.map((map,index)=>{
            map.splice(map.indexOf(localStorage.getItem("username")), 1);
            let contactDiv=document.createElement("div")
            let contactImage=document.createElement("img")
            contactImage.src=map[0]
            let contactName=document.createElement("p")
            contactName.innerHTML=map[3]
            contactName.onclick=function(){
                displayChatUI(map)
            }

            contactDiv.appendChild(contactImage)
            contactDiv.appendChild(contactName)
            // contactDiv.appendChild(eraseContactButton)
            agendaMainDiv.appendChild(contactDiv)
        })
        
        let agendaSearchDiv=document.getElementById("agendaSearchDiv")
        agendaSearchDiv.innerHTML=""

        let searchInput=document.createElement("input")
        searchInput.id="updateEmailInput"
        searchInput.type = "text";
        searchInput.placeholder = "Email";
    
        let addPerson=document.createElement("button")
        addPerson.innerHTML="+"
        addPerson.onclick=function(){
            addContactUI()
        }
        agendaMainDiv.appendChild(addPerson)

        agendaSearchDiv.appendChild(searchInput)
    })

}