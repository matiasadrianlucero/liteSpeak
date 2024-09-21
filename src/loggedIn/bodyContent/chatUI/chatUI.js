
import { sendChat } from "./sendChat"
import { fillChatLog } from "./fillChatLog"
import { blockContact } from "./blockContact"
import { unblockContact } from "./unblockContact"
export function chatUI(map){
    console.log(map)
    let bodyDiv=document.getElementById("bodyDiv")
    bodyDiv.innerHTML=""

    let contactDiv=document.createElement("div")
    contactDiv.id="contactDiv"

    let contactImg=document.createElement("img")
    contactImg.id=""

    let contactName=document.createElement("p")
    contactName.innerHTML=map[0]

    contactDiv.appendChild(contactImg)
    contactDiv.appendChild(contactName)

    let contactChatLogsDiv=document.createElement("div")
    contactChatLogsDiv.id="contactChatLogsDiv"

    let contactSendChatDiv=document.createElement("div")
    contactSendChatDiv.id="contactSendChatDiv"

    
    let contantactSendChatInput=document.createElement("input")
    contantactSendChatInput.id="chatInput"
    contantactSendChatInput.type = "text";
    contantactSendChatInput.placeholder = "Say whatsup";
    contantactSendChatInput.required=true

    let contactSendChatSubmit=document.createElement("button")
    contactSendChatSubmit.innerHTML=">"
    contactSendChatSubmit.onclick=function(){
    // let chatValue=document.getElementById("chatInput")
        let type="text"
        sendChat(
        localStorage.getItem("loginToken"),
        contantactSendChatInput.value,
        localStorage.getItem("id"),
        map[2],
        type,
        localStorage.getItem("username")
    )}

    contactSendChatDiv.appendChild(contantactSendChatInput)
    contactSendChatDiv.appendChild(contactSendChatSubmit)
    
    bodyDiv.appendChild(contactDiv)
    bodyDiv.appendChild(contactChatLogsDiv)
    bodyDiv.appendChild(contactSendChatDiv)

    fillChatLog(localStorage.getItem("loginToken"),map[0],localStorage.getItem("id"),map[2])
    
    let contactOptionHover=document.createElement("div")
    contactOptionHover.classList.add("hoverToDropDown")

    let cog=document.createElement("p")
    cog.innerHTML="cog"

    let contactOption=document.createElement("div")
    contactOption.classList.add("dropDownDiv")
    let blockUnblockContact=document.createElement("button")
    blockUnblockContact.id="blockUnblockContact"

    if(map[4]=='1'){
        blockUnblockContact.innerHTML="Unblock"
        blockUnblockContact.onclick=function(){
            unblockContact(localStorage.getItem("id"),map[3],localStorage.getItem("loginToken"))
        }
    }else {

        blockUnblockContact.innerHTML="Block"
        blockUnblockContact.onclick=function(){
            blockContact(localStorage.getItem("id"),map[3],localStorage.getItem("loginToken"))
        }
    }

    let eraseContact=document.createElement("button")
    eraseContact.id="eraseContact"
    eraseContact.innerHTML="Delete Contact"

    contactOption.appendChild(blockUnblockContact)
    contactOption.appendChild(eraseContact)
    
    contactOptionHover.appendChild(cog)
    contactOptionHover.appendChild(contactOption)

    contactDiv.appendChild(contactOptionHover)

}