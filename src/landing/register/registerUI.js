import { checkPassword } from "../inputValidation/checkValidityPasswords"
import { checkValidityFunction } from "../inputValidation/checkValidityFunction"
import { submitRegisterForm } from "./submitRegisterForm"
function registerUI(){
    
    let loginUIButton=document.getElementById("loginButton")
    loginUIButton.style.color="gray"
    loginUIButton.style.backgroundColor="black"


    let registerButton=document.getElementById("registerButton")
    registerButton.style.borderBottom="none"
    registerButton.style.color="#E6FAFC"
    registerButton.style.backgroundColor="#05050A"


    let resultsDiv=document.createElement("div")
    resultsDiv.id="resultsDiv"

    let landingFormMain=document.getElementById("landingFormMain")
    landingFormMain.innerHTML=""

    let landingForm=document.createElement("form")

    let landingInputEmail=document.createElement("input")
    landingInputEmail.id="landingInputEmail"
    landingInputEmail.required=true
    landingInputEmail.type = "email";
    landingInputEmail.placeholder = "Email";
    
    landingInputEmail.onchange=function() {
        checkValidityFunction([landingInputEmail,landingInputUsername,landingInputConfirmPassword],landingInputEnter)
      };


    let landingInputUsername=document.createElement("input")
    landingInputUsername.id="landingInputUsername"
    landingInputUsername.required=true
    landingInputUsername.type="text"
    landingInputUsername.placeholder="Username"
    landingInputUsername.onchange=function(){
        checkValidityFunction([landingInputEmail,landingInputUsername,landingInputConfirmPassword],landingInputEnter)
    }

    landingInputUsername.onchange=function() {
        checkValidityFunction([landingInputEmail,landingInputUsername,landingInputConfirmPassword],landingInputEnter)
    };


    let landingInputPassword=document.createElement("input")
    landingInputPassword.id="landingInputPassword"
    landingInputPassword.required=true
    landingInputPassword.type="password"
    landingInputPassword.placeholder="Password"

    landingInputPassword.onchange=function() {
        checkPassword("landingInputPassword","landingInputConfirmPassword"),checkValidityFunction([landingInputEmail,landingInputUsername,landingInputConfirmPassword],landingInputEnter)
    };

    let landingInputConfirmPassword=document.createElement("input")
    landingInputConfirmPassword.id="landingInputConfirmPassword"
    landingInputConfirmPassword.required=true
    landingInputConfirmPassword.type="password"
    landingInputConfirmPassword.placeholder="Confirm Password"

    landingInputConfirmPassword.onchange=function() {
        checkPassword("landingInputPassword","landingInputConfirmPassword"),checkValidityFunction([landingInputEmail,landingInputUsername,landingInputConfirmPassword],landingInputEnter)
    };

    let landingInputEnter=document.createElement("button")
    landingInputEnter.id="landingInputEnter"
    landingInputEnter.innerHTML="Create Account"
    landingInputEnter.onclick=function(e){e.preventDefault(),submitRegisterForm(landingInputEmail.value,landingInputUsername.value,landingInputPassword.value)}

    // landingInputEmail.defaultValue="email2@asd.com"
    // landingInputUsername.defaultValue="username2"
    // landingInputPassword.defaultValue="1234"
    // landingInputConfirmPassword.defaultValue="1234"

    landingForm.appendChild(landingInputEmail)
    landingForm.appendChild(landingInputUsername)
    landingForm.appendChild(landingInputPassword)
    landingForm.appendChild(landingInputConfirmPassword)
    landingForm.appendChild(landingInputEnter)
    landingForm.appendChild(resultsDiv)


    landingFormMain.appendChild(landingForm)

}
export {registerUI}