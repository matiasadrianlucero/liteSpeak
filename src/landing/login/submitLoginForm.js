import { storeLogin } from "./storeLogin";
import {loggedInUI} from "../../loggedIn/loggedInUI"
function submitLoginForm(email,password){
    event.preventDefault()
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    
    fetch('http://localhost/liteSpeak/src/backend/landingBackend/loginFunctions/submitLoginForm.php', {
        method: 'POST',
        body: formData,
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        storeLogin(data)
        loggedInUI()
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error response here
    });
}
export {submitLoginForm}