export function sendFriendRequest(idFriend,id,loginToken){
        let formData = new FormData();
        formData.append("idFriend", idFriend);
        formData.append("id", id);
        formData.append("loginToken", loginToken);
    
        fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/friendRequest/sendFriendRequest.php', {
            method: 'POST',
            body: formData,
            mode: 'cors'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        });

}