import { retrieveImage } from "../../../sideBar/retrieveImage"
import { recievedRequests } from "../recievedRequests"

import { acceptRequest } from "../acceptRequest"
import { rejectRequest } from "../rejectRequest"
import { blockRequests } from "../blockRequests"
export function displayRecievedRequestsUI(){
    let recievedResults=recievedRequests()
    recievedResults.then(function(recievedData){
        let recievedRequestsDiv=document.getElementById("recievedRequestsDiv")
        recievedRequestsDiv.innerHTML=""
        
        recievedData.map((recievedMap,index)=>{
            let recievedResultsDiv=document.createElement("div")
            let sentImg=document.createElement("img")
            let imgBackend=retrieveImage(recievedMap[1])
            imgBackend.then(function(result){
                var dataURI = "data:image/png;base64," + result;
                sentImg.src = dataURI;
            })
            let contactName=document.createElement("p")
            contactName.innerHTML=recievedMap[0]
            contactName.id="contactName"

            recievedResultsDiv.appendChild(sentImg)
            recievedResultsDiv.appendChild(contactName)

            let recievedButtonsDiv=document.createElement("div")
            recievedButtonsDiv.id="recievedButtonsDiv"
            let acceptRequestButton=document.createElement("button")
            acceptRequestButton.innerHTML="✔️"
            acceptRequestButton.onclick=function(){
                acceptRequest(recievedMap[2],localStorage.getItem("id"),localStorage.getItem("loginToken"))
            }

            let rejectRequestButton=document.createElement("button")
            rejectRequestButton.innerHTML="❌"
            rejectRequestButton.onclick=function(){
                rejectRequest(recievedMap[2],localStorage.getItem("id"),localStorage.getItem("loginToken"))
            }

            let blockRequestButton=document.createElement("button")
            blockRequestButton.innerHTML="🛡️"
            blockRequestButton.onclick=function(){
                blockRequests(recievedMap[2],localStorage.getItem("id"),localStorage.getItem("loginToken"))
            }

            recievedButtonsDiv.appendChild(acceptRequestButton)
            recievedButtonsDiv.appendChild(rejectRequestButton)
            recievedButtonsDiv.appendChild(blockRequestButton)

            recievedResultsDiv.appendChild(recievedButtonsDiv)
            recievedRequestsDiv.appendChild(recievedResultsDiv)
        })
    })
}