
import { sendChat } from "./sendChat"
import { fillChatLog } from "./fillChatLog"
export function displayChatUI(map){
    let bodyDiv=document.getElementById("bodyDiv")
    bodyDiv.innerHTML=""

    let chatLogDiv=document.createElement("div")
    chatLogDiv.id="chatLogDiv"

    let textInputDiv=document.createElement("div")

    let chatInput=document.createElement("input")
    chatInput.id="chatInput"
    chatInput.type = "text";
    chatInput.placeholder = "Say whatsup";
    chatInput.required=true

    let chatButtonSubmit=document.createElement("button")
    chatButtonSubmit.id="chatButtonSubmit"
    chatButtonSubmit.innerHTML = ">";
    chatButtonSubmit.onclick=function(){
        let chatValue=document.getElementById("chatInput")
        sendChat(map[2],localStorage.getItem("loginToken"),localStorage.getItem("username"),chatValue.value)
    }
    textInputDiv.appendChild(chatInput)
    textInputDiv.appendChild(chatButtonSubmit)
    bodyDiv.appendChild(chatLogDiv)
    bodyDiv.appendChild(textInputDiv)

    fillChatLog(map[2],localStorage.getItem("loginToken"),localStorage.getItem("id"))
}