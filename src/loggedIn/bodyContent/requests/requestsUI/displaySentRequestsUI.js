import { retrieveImage } from "../../../sideBar/retrieveImage"
import { sentRequests } from "../sentRequests"

import { cancelRequest } from "../cancelRequest"
export function displaySentRequestsUI(){
    let sentResults=sentRequests()
    sentResults.then(function(data){
        let sentRequestsDiv=document.getElementById("sentRequestsDiv")
        sentRequestsDiv.innerHTML=""
        data.map((map,index)=>{
            let results=document.createElement("div")
            results.onclick=function(){
                cancelRequest(map[2],localStorage.getItem("id"),localStorage.getItem("loginToken"))
            }
            console.log(map)
            let sentImg=document.createElement("img")
            let imgBackend=retrieveImage(map[1])
            imgBackend.then(function(result){
                var dataURI = "data:image/png;base64," + result;
                sentImg.src = dataURI;
            })
            let contactName=document.createElement("p")
            contactName.innerHTML=map[0]
            contactName.id="contactName"
            let contactStatus=document.createElement("p")
            contactStatus.innerHTML=map[3]
            contactStatus.id="contactStatus"

            results.appendChild(sentImg)
            results.appendChild(contactName)
            results.appendChild(contactStatus)

            sentRequestsDiv.appendChild(results)
        })
    })
}