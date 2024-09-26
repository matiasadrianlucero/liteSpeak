import {retrieveContacts} from "./retrieveContacts"
import { chatUI } from "../bodyContent/chatUI/chatUI"
import { retrieveImage } from "./retrieveImage"
function contactsUI(){
    // let contacts=retrieveContacts()
    let agendaMainDiv=document.getElementById("contactsDiv")
    agendaMainDiv.innerHTML=""
    ////Add Button
    let contacts=retrieveContacts()

    contacts.then(function(data){
        
        data.map((map,index)=>{
            let contactDiv=document.createElement("div")
            contactDiv.onclick=function(){
                chatUI(map)
            }
            let contactImage=document.createElement("img")
            let imgBackend=retrieveImage(map[1])

            imgBackend.then(function(data){
                var dataURI = "data:image/png;base64," + data;
                contactImage.src = dataURI;
            })

            let contactName=document.createElement("p")
            contactName.innerHTML=map[0]
            
            contactDiv.appendChild(contactImage)
            contactDiv.appendChild(contactName)
            agendaMainDiv.appendChild(contactDiv)
        })
        ////Render Search Input


    })


}
export {contactsUI}