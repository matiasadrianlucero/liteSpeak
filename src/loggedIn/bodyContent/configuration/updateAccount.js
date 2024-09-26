import { updateLocalStorage } from "./udpateLocalStorage";
import { sideBarUI } from "../../sideBar/sideBarUI";
import { notification } from "../../elements/notification";
import { userDetailsUI } from "../../sideBar/userDetailsUI";
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
        if(data=="Email Occupied"|| data=="Invalid Email Address"||data=="Username Occupied"){
            console.log("fail")
            notification(data,"fail")
        } else {
            updateLocalStorage(data)
            userDetailsUI()
            notification("Updated")
        }


    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error response here
    });
}
export {updateAccount}