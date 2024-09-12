import { storeContacts } from "./storeContacts";
function retrieveContacts(){
    let formData = new FormData();
    formData.append("id", localStorage.getItem("id"));
    formData.append("loginToken", localStorage.getItem("loginToken"));

    fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/contacts/retrieveContacts.php', {
        method: 'POST',
        body: formData,
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        resolve(data)
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error response here
    });
}
export {retrieveContacts}