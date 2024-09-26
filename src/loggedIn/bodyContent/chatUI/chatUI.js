
import { sendChat } from "./sendChat"
import { fillChatLog } from "./fillChatLog"
import { blockContact } from "../../agenda/contacts/blockContact"
import { deleteContact } from "../../agenda/contacts/deleteContact"
import { retrieveImage } from "../../sideBar/retrieveImage"
import cog from "../../../img/icons/cog.png"
import picture from "../../../img/icons/picture.png"
import { displayDropdown } from "../../elements/displayDropdown"
import { blockRequests } from "../requests/blockRequests"
let inputType="image"

function changeInputs(inputDiv,convId,contactChangeInputButton){
    inputDiv.innerHTML=""
    if(inputType=="text"){
        inputType="image"
        let contantactSendChatInput=document.createElement("input")
        contantactSendChatInput.id="contantactSendChatInput"
        contantactSendChatInput.type = "file";


        let contactSendChatSubmit=document.createElement("button")
        contactSendChatSubmit.innerHTML=">"

        contactSendChatSubmit.onclick=function(){
            sendChat(
            localStorage.getItem("loginToken"),
            contantactSendChatInput.files[0],
            localStorage.getItem("id"),
            convId,
            inputType,
            localStorage.getItem("username")
        )
    }
        inputDiv.appendChild(contantactSendChatInput)
        inputDiv.appendChild(contactSendChatSubmit)
        contactChangeInputButton.classList.add("selectedImage")

    } else {

        inputType="text"
        let contantactSendChatInput=document.createElement("input")
        contantactSendChatInput.id="contantactSendChatInput"
        contantactSendChatInput.type = "text";
        contantactSendChatInput.placeholder = "Say whatsup";
        contantactSendChatInput.required=true

        let contactSendChatSubmit=document.createElement("button")
        contactSendChatSubmit.innerHTML=">"
        contactSendChatSubmit.onclick=function(){
        sendChat(
            localStorage.getItem("loginToken"),
            contantactSendChatInput.value,
            localStorage.getItem("id"),
            convId,
            inputType,
            localStorage.getItem("username")
        )}
        inputDiv.appendChild(contantactSendChatInput)
        inputDiv.appendChild(contactSendChatSubmit)
        contactChangeInputButton.classList.remove("selectedImage")

    }
}
export function chatUI(map){
    inputType="image"
    let bodyDiv=document.getElementById("bodyDiv")
    bodyDiv.innerHTML=""

    let chatUiDiv=document.createElement("div")
    chatUiDiv.id="chatUiDiv"

    let contactDiv=document.createElement("div")
    contactDiv.id="contactDiv"

    let contactImg=document.createElement("img")
    contactImg.id=""
    let imgBackend=retrieveImage(map[1])

    imgBackend.then(function(data){
        var dataURI = "data:image/png;base64," + data;
        contactImg.src = dataURI;
    })
    let contactName=document.createElement("p")
    contactName.innerHTML=map[0]
    contactName.id="contactName"

    contactDiv.appendChild(contactImg)
    contactDiv.appendChild(contactName)
            //
            let contactOptionHover=document.createElement("div")
            contactOptionHover.id="contactOptionHover"
            contactOptionHover.style.display="none"
                let blockUnblockContact=document.createElement("button")
                blockUnblockContact.id="blockUnblockContact"
                blockUnblockContact.innerHTML="Block"
                blockUnblockContact.onclick=function(){
                    blockContact(localStorage.getItem("loginToken"),localStorage.getItem("id"),map[2])
                }
    
                let eraseContact=document.createElement("button")
                eraseContact.id="eraseContact"
                eraseContact.innerHTML="Delete Contact"
                eraseContact.onclick=function(){
                    deleteContact(localStorage.getItem("loginToken"),localStorage.getItem("id"),map[2])
                }
                contactOptionHover.appendChild(blockUnblockContact)
                contactOptionHover.appendChild(eraseContact)
        //
        contactDiv.appendChild(contactOptionHover)
    let cogDiv=document.createElement("div")
    let cogImg=document.createElement("img")
    cogImg.src=cog
    cogImg.id="cogImg"
    cogImg.onclick=function(){
        displayDropdown(contactOptionHover.id)
    }
    cogDiv.appendChild(cogImg)
    contactDiv.appendChild(cogDiv)
    let contactChatLogsDiv=document.createElement("div")
    contactChatLogsDiv.id="contactChatLogsDiv"

    let contactSendChatDiv=document.createElement("div")
    contactSendChatDiv.id="contactSendChatDiv"
    
    let inputDiv=document.createElement("div")
    inputDiv.id="inputDiv"


    let pictureImg=document.createElement("img")
    pictureImg.src=picture

    let contactChangeInputButton=document.createElement("button")
    contactChangeInputButton.onclick=function(){
        changeInputs(inputDiv,map[2],contactChangeInputButton)
    }
    contactChangeInputButton.appendChild(pictureImg)
    contactSendChatDiv.appendChild(contactChangeInputButton)
    contactSendChatDiv.appendChild(inputDiv)
    
    chatUiDiv.appendChild(contactDiv)

    chatUiDiv.appendChild(contactChatLogsDiv)
    chatUiDiv.appendChild(contactSendChatDiv)
    bodyDiv.appendChild(chatUiDiv)

    
    fillChatLog(localStorage.getItem("loginToken"),localStorage.getItem("id"),map[2])
    setInterval(function() {
        fillChatLog(localStorage.getItem("loginToken"),localStorage.getItem("id"),map[2])
      }, 10000);



    changeInputs(inputDiv,map[2],contactChangeInputButton)

}