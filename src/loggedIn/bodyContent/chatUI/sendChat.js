import { fillChatLog } from "./fillChatLog";
export function sendChat(loginToken,message,id,convId,type,username){
    let formData = new FormData();
    formData.append("id", id);
    formData.append("message", message);
    formData.append("loginToken", loginToken);
    formData.append("convId", convId);
    formData.append("type", type);
    formData.append("username", username);

    fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/chat/sendChat.php', {
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
