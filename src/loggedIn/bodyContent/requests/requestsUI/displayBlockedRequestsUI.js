import { retrieveImage } from "../../../sideBar/retrieveImage"
import { blockedContacts } from "../blockedContacts"

import { cancelRequest } from "../cancelRequest"
import { unblockContact } from "../unblockContact"
export function displayBlockedRequestsUI(){
    let blockedResult=blockedContacts()
    blockedResult.then(function(data){
        let blockedRequestsDiv=document.getElementById("blockedRequestsDiv")
        blockedRequestsDiv.innerHTML=""
        
        data.map((map,index)=>{
            let results=document.createElement("div")
            results.onclick=function(){
                unblockContact(localStorage.getItem("id"),map[2],localStorage.getItem("loginToken"))
            }
            let sentImg=document.createElement("img")
            let imgBackend=retrieveImage(map[1])
            imgBackend.then(function(result){
                var dataURI = "data:image/png;base64," + result;
                sentImg.src = dataURI;
            })
            let contactName=document.createElement("p")
            contactName.innerHTML=map[0]
            contactName.id="contactName"


            results.appendChild(sentImg)
            results.appendChild(contactName)

            blockedRequestsDiv.appendChild(results)
        })
    })
}