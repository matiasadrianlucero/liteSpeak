import { registerUI } from "./register/registerUI"
function landingUI(){
    let landingUIMain=document.createElement("div")

    // BUTTONS
    let buttonsDiv=document.createElement("div")
    let registerButton=document.createElement("button")
    registerButton.innerHTML="Register"
    registerButton.id="registerButton"

    let loginButton=document.createElement("button")
    loginButton.innerHTML="Login"
    loginButton.id="loginButton"

    buttonsDiv.appendChild(registerButton)
    buttonsDiv.appendChild(loginButton)
    landingUIMain.appendChild(buttonsDiv)
    // BUTTONS

    // FORMS
    let landingFormMain=document.createElement("div")
    landingFormMain.id="landingFormMain"
    
    landingUIMain.appendChild(landingFormMain)
    // FORMS
    document.body.appendChild(landingUIMain)
    registerUI()
}
export {landingUI}