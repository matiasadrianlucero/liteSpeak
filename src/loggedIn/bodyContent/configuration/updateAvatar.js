import { notification } from "../../elements/notification";
import { updateLocalStorage } from "./udpateLocalStorage";
import { userDetailsUI } from "../../sideBar/userDetailsUI";
export function updateAvatar(id,inputData,loginToken){
    event.preventDefault()
    let formData = new FormData();
    formData.append("id", id);
    formData.append("updateData", inputData);
    formData.append("loginToken", loginToken);

    fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/updateUser/updateAvatar.php', {
        method: 'POST',
        body: formData,
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        if(data[0]=="userAvatar"){
            updateLocalStorage(data)
            notification("Updated")
            userDetailsUI()
        } else {
            notification(data,true)
        }

    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
