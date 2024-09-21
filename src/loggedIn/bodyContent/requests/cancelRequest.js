export function cancelRequest(requestId,id,loginToken){
        let formData = new FormData();
        formData.append("idOfRequest", requestId);
        formData.append("id",id);
        formData.append("loginToken", loginToken);
    
        fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/friendRequest/cancelRequest.php', {
            method: 'POST',
            body: formData,
            mode: 'cors'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch((error) => {
            console.log(data)
        });
    


}