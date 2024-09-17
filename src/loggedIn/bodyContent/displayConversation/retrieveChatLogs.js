export function retrieveChatLogs(convId,loginToken,id){
    return new Promise(function(resolve, reject) {
        event.preventDefault()
        let formData = new FormData();
        formData.append("convId", convId);
        formData.append("loginToken", loginToken);
        formData.append("id", id);
    
        fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/conversations/retrieveChatLogs.php', {
            method: 'POST',
            body: formData,
            mode: 'cors'
        })
        .then(response => response.json())
        .then(data => {
            resolve(data)
    })
        .catch((error) => {
            reject(error);

        });
    })

}