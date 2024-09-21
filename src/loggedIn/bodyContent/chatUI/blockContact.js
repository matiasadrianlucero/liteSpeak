export function blockContact(id,contactId,loginToken){
    event.preventDefault()
    let formData = new FormData();
    formData.append("contactId", contactId);

    formData.append("id", id);
    formData.append("loginToken", loginToken);

    fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/contacts/blockContact.php', {
        method: 'POST',
        body: formData,
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
})
    .catch((error) => {
        console.error('Error:', error);
        // Handle error response here
    });
}