import { checkValidityFunction } from "../inputValidation/checkValidityFunction"
import { submitLoginForm } from "./submitLoginForm"
function loginUI(){
    let loginUIButton=document.getElementById("loginButton")
    loginUIButton.style.borderBottom="none"
    loginUIButton.style.color="#E6FAFC"
    loginUIButton.style.backgroundColor="#EBF7FF"

    let registerButton=document.getElementById("registerButton")
    registerButton.style.color="gray"
    registerButton.style.backgroundColor="#bac5cc"
    registerButton.style.borderBottom="solid 1px black"
    
    let landingFormMain=document.getElementById("landingFormMain")
    landingFormMain.innerHTML=""

    let landingForm=document.createElement("form")

    let resultsDiv=document.createElement("div")
    resultsDiv.id="resultsDiv"

    let landingInputEmail=document.createElement("input")
    landingInputEmail.id="landingInputEmail"
    landingInputEmail.required=true
    landingInputEmail.type = "email";
    landingInputEmail.placeholder = "Email";
    // landingInputEmail.defaultValue="asd@gmail.com"
    // landingInputEmail.onchange=function() {
    //     checkValidityFunction([landingInputEmail,landingInputPassword],landingInputEnter)
    // };
    landingInputEmail.addEventListener('keyup', function() {
        checkValidityFunction([landingInputEmail,landingInputPassword],landingInputEnter)
    });
    let landingInputPassword=document.createElement("input")
    landingInputPassword.id="landingInputPassword"
    landingInputPassword.required=true
    landingInputPassword.type="password"
    landingInputPassword.placeholder="Password"

    // landingInputPassword.onchange=function() {
    //     checkValidityFunction([landingInputEmail,landingInputPassword],landingInputEnter)
    // };
    landingInputPassword.addEventListener('keyup', function() {
        checkValidityFunction([landingInputEmail,landingInputPassword],landingInputEnter)
    });
    let landingInputEnter=document.createElement("button")
    landingInputEnter.id="landingInputEnter"
    landingInputEnter.innerHTML="Login"
    landingInputEnter.onclick=function(e){e.preventDefault(),submitLoginForm(landingInputEmail.value,landingInputPassword.value)} 

    landingForm.appendChild(landingInputEmail)
    landingForm.appendChild(landingInputPassword)
    landingForm.appendChild(landingInputEnter)
    landingForm.appendChild(resultsDiv)

    landingFormMain.appendChild(landingForm)

    

}
export {loginUI}