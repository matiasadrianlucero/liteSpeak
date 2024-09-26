import { updateAccount } from "./updateAccount"
import { updatePassword } from "./updatePassword"
import { updateAvatar } from "./updateAvatar"
function configurationUI(){
    let bodyDiv=document.getElementById("bodyDiv")
    bodyDiv.innerHTML=""
    let configurationUIDiv=document.createElement("div")
    configurationUIDiv.id="configurationUIDiv"
    ////User Details
        let accountDetails=document.createElement("h1")
        accountDetails.innerHTML="Account Details"

        //USERNAME UPD
        let updateUsernameDiv=document.createElement("div")

        let updateUsername=document.createElement("p")
        updateUsername.innerHTML="Update Username"

        let updateUsernameInput=document.createElement("input")
        updateUsernameInput.id="updateUsernameInput"
        updateUsernameInput.type = "text";
        updateUsernameInput.placeholder = "Username";
        updateUsernameInput.required=true

        let submitUpdateUsername=document.createElement("button")
        submitUpdateUsername.id="submitUpdateUsername"
        submitUpdateUsername.innerHTML = ">";
        submitUpdateUsername.onclick=function(){
            updateAccount(updateUsernameInput.value,localStorage.getItem("loginToken"),0)
        }
        updateUsernameDiv.appendChild(updateUsername)
        updateUsernameDiv.appendChild(updateUsernameInput)
        updateUsernameDiv.appendChild(submitUpdateUsername)
                //IMAGE UPDATE
        let updateAvatarDiv=document.createElement("div")

        let updateAvatarText=document.createElement("p")
        updateAvatarText.innerHTML="Update Avatar"

        let updateAvatarinput=document.createElement("input")
        updateAvatarinput.id="updateAvatarinput"
        updateAvatarinput.type = "file";
        updateAvatarinput.placeholder = "avatar";
        updateAvatarinput.required=true

        let submitUpdateAvatar=document.createElement("button")
        submitUpdateAvatar.id="submitUpdateAvatar"
        submitUpdateAvatar.innerHTML = ">";
        submitUpdateAvatar.onclick=function(){
            updateAvatar(localStorage.getItem("id"),updateAvatarinput.files[0],localStorage.getItem("loginToken"))
        }

        updateAvatarDiv.appendChild(updateAvatarText)
        updateAvatarDiv.appendChild(updateAvatarinput)
        updateAvatarDiv.appendChild(submitUpdateAvatar)
        //EMAIL UPD
        let updateEmailDiv=document.createElement("div")

        let updateEmail=document.createElement("p")
        updateEmail.innerHTML="Update Email"

        let updateEmailInput=document.createElement("input")
        updateEmailInput.id="updateEmailInput"
        updateEmailInput.type = "text";
        updateEmailInput.placeholder = "Email";
        updateEmailInput.required=true

        let submitUpdateEmail=document.createElement("button")
        submitUpdateEmail.id="submitUpdateUsername"
        submitUpdateEmail.innerHTML = ">";
        submitUpdateEmail.onclick=function(){
            updateAccount(updateEmailInput.value,localStorage.getItem("loginToken"),1)
        }

        updateEmailDiv.appendChild(updateEmail)
        updateEmailDiv.appendChild(updateEmailInput)
        updateEmailDiv.appendChild(submitUpdateEmail)
    //// Advanced Preferences
        let advancedPreferences=document.createElement("h1")
        advancedPreferences.innerHTML="Advanced Preferences"
        //update password
        let updatePasswordDiv=document.createElement("div")

        let updatePasswordText=document.createElement("p")
        updatePasswordText.innerHTML="Update Password"
        let updatePasswordInput=document.createElement("input")
        updatePasswordInput.id="updatePasswordInput"
        updatePasswordInput.type = "password";
        updatePasswordInput.placeholder = "Password";
        updatePasswordInput.required=true

        updatePasswordDiv.appendChild(updatePasswordText)
        updatePasswordDiv.appendChild(updatePasswordInput)
        //current password Check
        let updateCurrentPasswordDiv=document.createElement("div")

        let updateCurrentPassword=document.createElement("p")
        updateCurrentPassword.innerHTML="Current Password"

        let updateCurrentPasswordInput=document.createElement("input")
        updateCurrentPasswordInput.id="updateCurrentPasswordInput"
        updateCurrentPasswordInput.type = "password";
        updateCurrentPasswordInput.placeholder = "Current Password";
        updateCurrentPasswordInput.required=true
        //
        let updatePasswordButton=document.createElement("button")
        updatePasswordButton.innerHTML=">"
        updatePasswordButton.onclick=function(){
            updatePassword(updatePasswordInput.value,updateCurrentPasswordInput.value,localStorage.getItem("loginToken"))
        } 

        updateCurrentPasswordDiv.appendChild(updateCurrentPassword)
        updateCurrentPasswordDiv.appendChild(updateCurrentPasswordInput)
        updateCurrentPasswordDiv.appendChild(updatePasswordButton)
        
        // updateCurrentPasswordDiv.appendChild(submitCurrentUpdatePassword)
    ////
    configurationUIDiv.appendChild(accountDetails)
    configurationUIDiv.appendChild(updateUsernameDiv)
    configurationUIDiv.appendChild(updateEmailDiv)
    configurationUIDiv.appendChild(updateAvatarDiv)

    configurationUIDiv.appendChild(advancedPreferences)
    configurationUIDiv.appendChild(updatePasswordDiv)
    configurationUIDiv.appendChild(updateCurrentPasswordDiv)
        bodyDiv.appendChild(configurationUIDiv)
    //
    // let advancedDetails=document.createElement("h1")
    // advancedDetails.innerHTML="Advanced Details"
    
    // let manageAccount=document.createElement("h1")
    // manageAccount.innerHTML="Manage Account"

}
export {configurationUI}