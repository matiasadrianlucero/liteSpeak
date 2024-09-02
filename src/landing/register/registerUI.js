import { checkPassword } from "../inputValidation/checkValidityPasswords"
import { checkValidityFunction } from "../inputValidation/checkValidityFunction"
import { submitRegisterForm } from "./submitRegisterForm"
function registerUI(){
    
    let landingFormMain=document.getElementById("landingFormMain")
    landingFormMain.innerHTML=""

    let landingForm=document.createElement("form")

    let landingInputEmail=document.createElement("input")
    landingInputEmail.id="landingInputEmail"
    landingInputEmail.required=true
    landingInputEmail.type = "email";
    landingInputEmail.placeholder = "Email";

    
    landingInputEmail.onchange=function(){
        checkValidityFunction([landingInputUsername,landingInputConfirmPassword],landingInputEmail,landingInputEnter)
    }

    let landingInputUsername=document.createElement("input")
    landingInputUsername.id="landingInputUsername"
    landingInputUsername.required=true
    landingInputUsername.type="text"
    landingInputUsername.placeholder="Username"
    landingInputUsername.onchange=function(){
        checkValidityFunction([landingInputUsername,landingInputConfirmPassword],landingInputEmail,landingInputEnter)
    }


    let landingInputPassword=document.createElement("input")
    landingInputPassword.id="landingInputPassword"
    landingInputPassword.required=true
    landingInputPassword.type="password"
    landingInputPassword.placeholder="Password"
    landingInputPassword.onchange=function(){checkPassword("landingInputPassword","landingInputConfirmPassword"),checkValidityFunction([landingInputUsername,landingInputConfirmPassword],landingInputEmail,landingInputEnter)}

    let landingInputConfirmPassword=document.createElement("input")
    landingInputConfirmPassword.id="landingInputConfirmPassword"
    landingInputConfirmPassword.required=true
    landingInputConfirmPassword.type="password"
    landingInputConfirmPassword.placeholder="Verify Password"
    landingInputConfirmPassword.onchange=function(){checkPassword("landingInputPassword","landingInputConfirmPassword"),checkValidityFunction([landingInputUsername,landingInputConfirmPassword],landingInputEmail,landingInputEnter)}


    let landingInputEnter=document.createElement("button")
    landingInputEnter.id="landingInputEnter"
    landingInputEnter.innerHTML="Submit"
    landingInputEnter.onclick=function(e){e.preventDefault(),submitRegisterForm(landingInputEmail.value,landingInputUsername.value,landingInputPassword.value)}

    landingInputEmail.defaultValue="email@asd.com"
    landingInputUsername.defaultValue="username"
    landingInputPassword.defaultValue="password"
    landingInputConfirmPassword.defaultValue="password"

    landingForm.appendChild(landingInputEmail)
    landingForm.appendChild(landingInputUsername)
    landingForm.appendChild(landingInputPassword)
    landingForm.appendChild(landingInputConfirmPassword)
    landingForm.appendChild(landingInputEnter)

    landingFormMain.appendChild(landingForm)

}
export {registerUI}