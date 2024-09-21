import { contactsUI } from "./contactsUI";
export function eraseContact(emailOfContact,idOfUser,loginToken){
    let formData = new FormData();

    formData.append("emailOfContact", emailOfContact);
    formData.append("idOfUser", idOfUser);
    formData.append("loginToken", loginToken);

    fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/contacts/eraseContact.php', {
        method: 'POST',
        body: formData,
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        contactsUI()
    })
    .catch((error) => {
        console.log(error)
    });


}