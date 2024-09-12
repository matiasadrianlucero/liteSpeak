function logoutBackend(){
    event.preventDefault()
    let formData = new FormData();

    formData.append("email", localStorage.getItem("email"));
    formData.append("logout", true);
    
    fetch('http://localhost/liteSpeak/src/backend/destroySession/logout.php', {
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
export{logoutBackend}