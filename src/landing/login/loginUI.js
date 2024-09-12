import { checkValidityFunction } from "../inputValidation/checkValidityFunction"
import { submitLoginForm } from "./submitLoginForm"
function loginUI(){
    
    let landingFormMain=document.getElementById("landingFormMain")
    landingFormMain.innerHTML=""

    let landingForm=document.createElement("form")

    let landingInputEmail=document.createElement("input")
    landingInputEmail.id="landingInputEmail"
    landingInputEmail.required=true
    landingInputEmail.type = "email";
    landingInputEmail.placeholder = "Email";

    landingInputEmail.addEventListener('blur', function() {
        checkValidityFunction([landingInputEmail,landingInputPassword],landingInputEnter)
    });

    let landingInputPassword=document.createElement("input")
    landingInputPassword.id="landingInputPassword"
    landingInputPassword.required=true
    landingInputPassword.type="password"
    landingInputPassword.placeholder="Password"

    landingInputPassword.addEventListener('blur', function() {
        checkValidityFunction([landingInputEmail,landingInputPassword],landingInputEnter)
    });

    let landingInputEnter=document.createElement("button")
    landingInputEnter.id="landingInputEnter"
    landingInputEnter.innerHTML="Submit"
    landingInputEnter.onclick=function(e){e.preventDefault(),submitLoginForm(landingInputEmail.value,landingInputPassword.value)}

    landingInputEmail.defaultValue="email2@asd.com"
    landingInputPassword.defaultValue="1234"

    landingForm.appendChild(landingInputEmail)
    landingForm.appendChild(landingInputPassword)
    landingForm.appendChild(landingInputEnter)

    landingFormMain.appendChild(landingForm)

}
export {loginUI}