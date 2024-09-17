export function startConversation(email,id,loginToken){
    event.preventDefault()
    let formData = new FormData();
    formData.append("email", email);
    formData.append("id", id);
    formData.append("loginToken", loginToken);
    formData.append("username", localStorage.getItem("username"));

    fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/conversations/startConversation.php', {
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