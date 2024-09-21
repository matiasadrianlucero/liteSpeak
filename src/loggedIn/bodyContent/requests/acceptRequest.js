export function acceptRequest(requestId,id,loginToken){
    let formData = new FormData();
    formData.append("requestId", requestId);
    formData.append("id",id);
    formData.append("loginToken", loginToken);

    fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/friendRequest/acceptRequest.php', {
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