export function retrieveChatLogs(loginToken,contactName,id,convId){
    return new Promise(function(resolve, reject) {
        let formData = new FormData();
        formData.append("id", id);
        formData.append("loginToken", loginToken);
        formData.append("contactName", contactName);
        formData.append("convId", convId);

        fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/chat/retrieveChatLog.php', {
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