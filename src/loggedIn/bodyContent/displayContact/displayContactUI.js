import { startConversation } from "./startConversation"
export function displayContact(data){
    let bodyDiv=document.getElementById("bodyDiv")
    bodyDiv.innerHTML=""

    let contactName=document.createElement("p")
    contactName.innerHTML=data[0]

    let contactEmail=document.createElement("p")
    contactEmail.innerHTML=data[1]

    let contactimg=document.createElement("img")
    contactimg.src=data[2]

    let startConversationButton=document.createElement("button")
    startConversationButton.innerHTML="Start a conversation"
    startConversationButton.onclick=function(){
        startConversation(data[1],localStorage.getItem("id"),localStorage.getItem("loginToken"))
    }
    bodyDiv.appendChild(contactName)
    bodyDiv.appendChild(contactEmail)
    bodyDiv.appendChild(contactimg)
    bodyDiv.appendChild(startConversationButton)
}