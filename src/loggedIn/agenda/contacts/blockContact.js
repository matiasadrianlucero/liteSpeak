import { introUI } from "../../bodyContent/intro/introUI";
import { notification } from "../../elements/notification";
import { contactsUI } from "../../sideBar/contactsUI";
export function blockContact(loginToken,id,convId){
    let formData = new FormData();
    formData.append("loginToken", loginToken);
    formData.append("id", id);
    formData.append("convId", convId);

    fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/contacts/blockContact.php', {
        method: 'POST',
        body: formData,
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        introUI()
        notification(data)
        contactsUI()
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error response here
    });
}
