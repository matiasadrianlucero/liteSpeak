export function retrieveConversations(){
    return new Promise(function(resolve, reject) {
        let formData = new FormData();
        formData.append("id", localStorage.getItem("id"));
        formData.append("loginToken", localStorage.getItem("loginToken"));

        fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/conversations/retrieveConversations.php', {
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
            reject(error);
        });
    })

}