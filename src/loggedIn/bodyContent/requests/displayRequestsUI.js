import { sentRequests } from "./sentRequests"
import { recievedRequests } from "./recievedRequests"
import { cancelRequest } from "./cancelRequest"
import { acceptRequest } from "./acceptRequest"

export function displayRequestsUI(){
    let bodyDiv=document.getElementById("bodyDiv")
    bodyDiv.innerHTML=""
    
    let requestsDiv=document.createElement("div")

    let sentDiv=document.createElement("div")
    let sentTitle=document.createElement("p")
    let sentRequestsDiv=document.createElement("div")
    sentRequestsDiv.id="sentRequestsDiv"
    sentTitle.innerHTML="Friend Requests Sent"
    sentDiv.appendChild(sentTitle)
    sentDiv.appendChild(sentRequestsDiv)

    let sentResults=sentRequests()
    sentResults.then(function(data){
        data.map((map,index)=>{
            let results=document.createElement("div")
            results.innerHTML=map
            console.log(map)
            results.onclick=function(){
                cancelRequest(map[2],localStorage.getItem("id"),localStorage.getItem("loginToken"))
            }
            sentRequestsDiv.appendChild(results)
        })
    })

    let recievedDiv=document.createElement("div")
    let recievedTitle=document.createElement("p")
    let recievedRequestsDiv=document.createElement("div")
    recievedRequestsDiv.id="recievedRequestsDiv"
    recievedTitle.innerHTML="Friend Requests Recieved"
    recievedDiv.appendChild(recievedTitle)
    recievedDiv.appendChild(recievedRequestsDiv)

    let recievedResults=recievedRequests()
    recievedResults.then(function(data){
        data.map((map,index)=>{
            let recievedResultsDiv=document.createElement("div")
            recievedResultsDiv.innerHTML=map

            let acceptRequestButton=document.createElement("button")
            acceptRequestButton.innerHTML="Accept"
            acceptRequestButton.onclick=function(){
                acceptRequest(map[2],localStorage.getItem("id"),localStorage.getItem("loginToken"))
            }

            let rejectRequestButton=document.createElement("button")
            rejectRequestButton.innerHTML="Reject"
            rejectRequestButton.onclick=function(){
                rejectRequestButton(map[2],localStorage.getItem("id"),localStorage.getItem("loginToken"))
            }

            recievedResultsDiv.appendChild(acceptRequestButton)
            recievedResultsDiv.appendChild(rejectRequestButton)
            recievedRequestsDiv.appendChild(recievedResultsDiv)
        })
    })

    requestsDiv.appendChild(recievedTitle)
    requestsDiv.appendChild(sentDiv)
    
    bodyDiv.appendChild(requestsDiv)
    bodyDiv.appendChild(recievedDiv)

}