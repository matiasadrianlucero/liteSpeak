import { introBlob } from "../../elements/introBlob"
export function introUI(){
    let bodyDiv=document.getElementById("bodyDiv")
    bodyDiv.innerHTML=""
    let bodyIntro=document.createElement("div")
    bodyIntro.id="bodyIntro"
    bodyDiv.appendChild(bodyIntro)
    introBlob("Sidebar","Displays contacts and user details<br> Access chat log by clicking on a contact<br>Click on user details for more options")
    introBlob("Add a friend","Search an existing user<br>Click to send a friend request")
    introBlob("Preferences","Allows the user to update their personal data")
    introBlob("Manage Interactions","Requests sent: displays sent friend requests, also allows to cancel them <br> Requests recieved: displays recieved requests, allows to accept or cancel the request, also allows to block requests from the user.<br>Blocked Users: displays blocked users, also allows to unblock users.")
    introBlob("Chat","Send images or text to a selected contact, also allows to block or delete the contact")

}