
function updatePassword(updatePassword,verifyPassword,loginToken){
    event.preventDefault()
    let formData = new FormData();
    formData.append("id", localStorage.getItem("id"));
    formData.append("updatePassword", updatePassword);
    formData.append("verifyPassword", verifyPassword);
    formData.append("loginToken", loginToken);

    fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/updateUser/updatePassword.php', {
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
export {updatePassword}