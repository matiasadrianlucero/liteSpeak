import { addContactUI } from "../../bodyContent/addContact/addContactUI";
import { startConversation } from "../../bodyContent/displayContact/startConversation";
export function friendRequest(contactAddress){
    let formData = new FormData();
    formData.append("id", localStorage.getItem("id"));
    formData.append("contactAddress", contactAddress);
    formData.append("loginToken", localStorage.getItem("loginToken"));

    fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/contacts/addContact.php', {
        method: 'POST',
        body: formData,
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        // startConversation(contactAddress,localStorage.getItem("id"),localStorage.getItem("loginToken"))
        // contactsUI()
})
    .catch((error) => {
        console.error('Error:', error);
        // Handle error response here
    });
}
