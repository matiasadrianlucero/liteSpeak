import { notification } from "../../elements/notification";
import { displayBlockedRequestsUI } from "./requestsUI/displayBlockedRequestsUI";
import { displayRecievedRequestsUI } from "./requestsUI/displayRecievedRequestsUI";
export function blockRequests(requestId,id,loginToken){
    let formData = new FormData();
    formData.append("requestId", requestId);
    formData.append("id", id);
    formData.append("loginToken", loginToken);

    fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/friendRequest/blockRequests.php', {
        method: 'POST',
        body: formData,
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        notification(data)
        displayBlockedRequestsUI()
        displayRecievedRequestsUI()
})
    .catch((error) => {
        console.error('Error:', error);
        // Handle error response here
    });
}