import { notification } from "../../elements/notification";
import { contactsUI } from "../../sideBar/contactsUI";
import { introUI } from "../../bodyContent/intro/introUI";
export function deleteContact(loginToken,id,convId){
    let formData = new FormData();
    formData.append("loginToken", loginToken);
    formData.append("id", id);
    formData.append("convId", convId);

    fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/contacts/deleteContact.php', {
        method: 'POST',
        body: formData,
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        contactsUI()
        notification(data)
        introUI()
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error response here
    });
}
