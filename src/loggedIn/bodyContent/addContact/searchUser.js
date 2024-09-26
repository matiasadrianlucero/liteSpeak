export function searchUser(userToSearch){
    return new Promise(function(resolve, reject) {
        let formData = new FormData();

        formData.append("userToSearch", userToSearch);
    
        fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/friendRequest/searchUser.php', {
            method: 'POST',
            body: formData,
            mode: 'cors'
        })
        .then(response => response.json())
        .then(data => {
            resolve(data)
        })
        .catch((error) => {
            reject(error)
        });
    })

}