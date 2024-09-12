function addContact(contactAddress){
    event.preventDefault()
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
        console.log(data)
        storeLogin(data)
        loggedInUI()
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error response here
    });
}
export {addContact} 