import { updateLocalStorage } from "./udpateLocalStorage";
import { loggedInUI } from "../../loggedInUI";
function updateAccount(inputData,loginToken,option){
    event.preventDefault()
    let formData = new FormData();
    formData.append("id", localStorage.getItem("id"));
    formData.append("updateData", inputData);
    formData.append("loginToken", loginToken);
    formData.append("option", option);

    fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/updateUser/updateUser.php', {
        method: 'POST',
        body: formData,
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        updateLocalStorage(data)
        loggedInUI()
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error response here
    });
}
export {updateAccount}