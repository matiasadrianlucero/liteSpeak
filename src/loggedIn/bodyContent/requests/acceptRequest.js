import { notification } from "../../elements/notification";
import { displayRecievedRequestsUI } from "./requestsUI/displayRecievedRequestsUI";
import {contactsUI} from "../../sideBar/contactsUI"
export function acceptRequest(requestId,id,loginToken){
    let formData = new FormData();
    formData.append("requestId", requestId);
    formData.append("id",id);
    formData.append("loginToken", loginToken);

    fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/friendRequest/acceptRequest.php', {
        method: 'POST',
        body: formData,
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch((error) => {
        displayRecievedRequestsUI()
        contactsUI()
        //I recieve a "-" after sending a request but i cant find the source of the problem, 
        //i checked by putting all the code in comments but i get a -, regardless the function works but can't get the success message as json_encode
    });



}