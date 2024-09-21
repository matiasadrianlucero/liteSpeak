function submitRegisterForm(email,username,password){
    event.preventDefault()
    let formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    
    fetch('http://localhost/liteSpeak/src/backend/landingBackend/registerFunctions/submitRegisterForm.php', {
        method: 'POST',
        body: formData,
          mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        let landingFormMain=document.getElementById("resultsDiv")
        landingFormMain.innerHTML=""
        if(data=="Account Created!") {
            let result=document.createElement("p")
            result.innerHTML=data
            landingFormMain.appendChild(result)
            result.style.color="#9CFC97"
        } else {
            data.map((map,index)=>{
                let result=document.createElement("p")
                result.innerHTML=map + "<br>"
                result.style.color="red"
                landingFormMain.appendChild(result)
            })
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error response here
    });
}
export {submitRegisterForm}