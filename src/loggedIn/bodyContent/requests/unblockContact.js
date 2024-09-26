import { displayBlockedRequestsUI } from "./requestsUI/displayBlockedRequestsUI";
import { notification } from "../../elements/notification";
export function unblockContact(id,convId,loginToken){
    event.preventDefault()
    let formData = new FormData();
    formData.append("convId", convId);

    formData.append("id", id);
    formData.append("loginToken", loginToken);

    fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/contacts/unblockContact.php', {
        method: 'POST',
        body: formData,
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        notification(data)
        displayBlockedRequestsUI()
})
    .catch((error) => {
        console.error('Error:', error);
        // Handle error response here
    });
}