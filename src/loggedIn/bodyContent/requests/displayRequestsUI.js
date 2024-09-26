
import { displaySentRequestsUI } from "./requestsUI/displaySentRequestsUI"
import { displayRecievedRequestsUI } from "./requestsUI/displayRecievedRequestsUI"
import { displayBlockedRequestsUI } from "./requestsUI/displayBlockedRequestsUI"
export function displayRequestsUI(){
    let bodyDiv=document.getElementById("bodyDiv")
    bodyDiv.innerHTML=""
    //
    let requestsDiv=document.createElement("div")
    requestsDiv.id="requestsDiv"
    let sentDiv=document.createElement("div")
    let sentTitle=document.createElement("h2")
    let sentRequestsDiv=document.createElement("div")
    sentRequestsDiv.id="sentRequestsDiv"
    sentTitle.innerHTML="Requests Sent"
    sentTitle.style.color="#E6FAFC"
    sentDiv.appendChild(sentTitle)
    sentDiv.appendChild(sentRequestsDiv)

    let recievedDiv=document.createElement("div")
    let recievedTitle=document.createElement("h2")
    recievedTitle.id="recievedTitle"
    let recievedRequestsDiv=document.createElement("div")
    recievedRequestsDiv.id="recievedRequestsDiv"
    recievedTitle.innerHTML="Requests Recieved"
    recievedDiv.appendChild(recievedTitle)
    recievedDiv.appendChild(recievedRequestsDiv)

    let blockedDiv=document.createElement("div")
    let blockedTitle=document.createElement("h2")
    blockedTitle.id="blockedTitle"
    let blockedRequestsDiv=document.createElement("div")
    blockedRequestsDiv.id="blockedRequestsDiv"
    blockedTitle.innerHTML="Blocked Users"
    blockedDiv.appendChild(blockedTitle)
    blockedDiv.appendChild(blockedRequestsDiv)



    requestsDiv.appendChild(sentDiv)
    requestsDiv.appendChild(recievedDiv)
    requestsDiv.appendChild(blockedDiv)

    bodyDiv.appendChild(requestsDiv)
    displaySentRequestsUI()
    displayRecievedRequestsUI()
    displayBlockedRequestsUI()
}