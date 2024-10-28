export function blockedContacts(){
    return new Promise(function(resolve, reject) {
        let formData = new FormData();
        formData.append("id", localStorage.getItem("id"));
        formData.append("loginToken", localStorage.getItem("loginToken"));

        fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/contacts/retrieveBlockedContacts.php', {
            method: 'POST',
            body: formData,
            mode: 'cors'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            resolve(data)
        })
        .catch((error) => {
            console.error('Error:', error);
            reject(error);
        });
    })

}
