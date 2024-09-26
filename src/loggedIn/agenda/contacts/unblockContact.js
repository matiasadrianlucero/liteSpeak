export function unblockContact(loginToken,id,convId){
    let formData = new FormData();
    formData.append("loginToken", loginToken);
    formData.append("id", id);
    formData.append("convId", convId);

    fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/contacts/unblockContact.php', {
        method: 'POST',
        body: formData,
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {

    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error response here
    });
}
