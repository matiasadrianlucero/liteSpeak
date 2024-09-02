function submitRegisterForm(email,username,password){
    event.preventDefault()
    let formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    
    fetch('http://localhost/liteSpeak/src/backend/submitRegisterForm.php', {
        method: 'POST',
        body: formData,
          mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle success response here
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error response here
    });
}
export {submitRegisterForm}