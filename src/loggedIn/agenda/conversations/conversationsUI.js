import { retrieveConversations } from "./retrieveConversations"
import { displayChatUI } from "../../bodyContent/displayConversation/displayChatUI"
export function conversationsUI(){
    let agendaMainDiv=document.getElementById("agendaMainDiv")
    agendaMainDiv.innerHTML=""
    let conversations=retrieveConversations()
    conversations.then(function(data){
        let agendaMainDiv=document.getElementById("agendaMainDiv")
        agendaMainDiv.innerHTML=""

        
        data.map((map,index)=>{
            map.splice(map.indexOf(localStorage.getItem("username")), 1);

            console.log(map)
            let contactDiv=document.createElement("div")
            let contactImage=document.createElement("img")
            contactImage.src=map[0]
            let contactName=document.createElement("p")
            contactName.innerHTML=map[3]
            contactName.onclick=function(){
                displayChatUI(map)
            }

            let eraseContactButton=document.createElement("button")
            eraseContactButton.innerHTML="Erase Conversation"
            eraseContactButton.onclick=function(){
                eraseContact(map[1],localStorage.getItem("id"),localStorage.getItem("loginToken"))
            }

            contactDiv.appendChild(contactImage)
            contactDiv.appendChild(contactName)
            contactDiv.appendChild(eraseContactButton)
            agendaMainDiv.appendChild(contactDiv)
        })
        
        let agendaSearchDiv=document.getElementById("agendaSearchDiv")
        agendaSearchDiv.innerHTML=""

        let searchInput=document.createElement("input")
        searchInput.id="updateEmailInput"
        searchInput.type = "text";
        searchInput.placeholder = "Email";
    
        agendaSearchDiv.appendChild(searchInput)
    })

}