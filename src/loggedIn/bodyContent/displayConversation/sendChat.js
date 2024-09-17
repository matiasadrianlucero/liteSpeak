export function sendChat(convId,loginToken,username,chatValue){
    event.preventDefault()
    let formData = new FormData();
    formData.append("convId", convId);
    formData.append("loginToken", loginToken);
    formData.append("username", username);
    formData.append("chatValue", chatValue);
    formData.append("id", localStorage.getItem("id"));

    fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/conversations/sendChat.php', {
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
