import { updateAccount } from "./updateAccount"
import { updatePassword } from "./updatePassword"
function configurationUI(){
    let bodyDiv=document.getElementById("bodyDiv")
    bodyDiv.innerHTML=""
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
        
        let updatePasswordSubmitDiv=document.createElement("div")

        let updatePasswordButton=document.createElement("button")
        updatePasswordButton.innerHTML="Update Password"
        updatePasswordButton.onclick=function(){
            updatePassword(updatePasswordInput.value,updateCurrentPasswordInput.value,localStorage.getItem("loginToken"))
        } 


        updatePasswordSubmitDiv.appendChild(updatePasswordButton)

        updateCurrentPasswordDiv.appendChild(updateCurrentPassword)
        updateCurrentPasswordDiv.appendChild(updateCurrentPasswordInput)
        updateCurrentPasswordDiv.appendChild(updatePasswordSubmitDiv)
        // updateCurrentPasswordDiv.appendChild(submitCurrentUpdatePassword)
    ////
    bodyDiv.appendChild(accountDetails)
    bodyDiv.appendChild(updateUsernameDiv)
    bodyDiv.appendChild(updateEmailDiv)

    bodyDiv.appendChild(advancedPreferences)
    bodyDiv.appendChild(updatePasswordDiv)
    bodyDiv.appendChild(updateCurrentPasswordDiv)

    //
    // let advancedDetails=document.createElement("h1")
    // advancedDetails.innerHTML="Advanced Details"
    
    // let manageAccount=document.createElement("h1")
    // manageAccount.innerHTML="Manage Account"

}
export {configurationUI}