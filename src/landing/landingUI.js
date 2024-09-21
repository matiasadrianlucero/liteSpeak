import { registerUI } from "./register/registerUI"
import { loginUI } from "./login/loginUI"
import { backgroundStyling } from "../backgroundAnimation/backgroundStyling"

function landingUI(){

    document.body.innerHTML=""
    backgroundStyling()

    let landingBody=document.createElement("div")
    landingBody.id="landingBody"
    
    let landingUIPresentation=document.createElement("div")
    landingUIPresentation.id="landingUIPresentation"

    let liteSpeakTitle=document.createElement("h1")
    liteSpeakTitle.innerHTML="Lite Speak"

    let liteSpeakDescription=document.createElement("p")
    liteSpeakDescription.innerHTML="Esse non excepteur enim minim quis sunt id duis veniam ea irure amet. Voluptate duis exercitation Lorem aute Lorem reprehenderit eiusmod non velit. Consectetur laborum dolor sunt enim voluptate ea consectetur irure irure. Minim quis magna duis pariatur deserunt ullamco mollit nisi do ipsum."
    landingUIPresentation.appendChild(liteSpeakTitle)
    landingUIPresentation.appendChild(liteSpeakDescription)
    ////landingUIMain
    let landingUIMain=document.createElement("div")
    landingUIMain.id="landingUIMain"
    // BUTTONS
    let buttonsDiv=document.createElement("div")
    buttonsDiv.id="buttonsDiv"
    
    let registerButton=document.createElement("button")
    registerButton.innerHTML="Register"
    registerButton.id="registerButton"
    registerButton.onclick=function(){registerUI()}

    let loginButton=document.createElement("button")
    loginButton.innerHTML="Login"
    loginButton.id="loginButton"
    loginButton.onclick=function(){loginUI()}

    buttonsDiv.appendChild(registerButton)
    buttonsDiv.appendChild(loginButton)
    landingUIMain.appendChild(buttonsDiv)

    let landingFormMain=document.createElement("div")
    landingFormMain.id="landingFormMain"
    ////

    
    landingUIMain.appendChild(landingFormMain)
    // FORMS

    
    landingBody.appendChild(landingUIPresentation)
    landingBody.appendChild(landingUIMain)
    document.body.appendChild(landingBody)
    registerUI()
}
export {landingUI}