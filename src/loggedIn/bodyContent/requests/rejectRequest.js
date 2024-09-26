import { notification } from "../../elements/notification";
import { displayRecievedRequestsUI } from "./requestsUI/displayRecievedRequestsUI";
export function rejectRequest(requestId,id,loginToken){
    let formData = new FormData();
    formData.append("requestId", requestId);
    formData.append("id",id);
    formData.append("loginToken", loginToken);

    fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/friendRequest/rejectRequest.php', {
        method: 'POST',
        body: formData,
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        notification(data)
        displayRecievedRequestsUI()
    })
    .catch((error) => {
        console.log(data)
    });



}