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
    liteSpeakDescription.innerHTML="⚪A social website where two users cand send text or images to each other. <br>"+
    "⚪After making a few websites with react and php, i decided i wanted to practice js more since i thought i wasn't using react to its full potential, so i started theodinproject to relearn everything. I wanted to join js and php to make something cohesive, meaning a website thats well rounded in front-end and in back-end, altough it's not perfect i do think i achieved that well roundedness. Also got some reps with webpack.<br>"+
    "⚪I wanted to be tidier, i think achieved that to a certain extent, but i feel like it's still messy (some functions might not follow the naming conventions that i established, would like to reorganize and rename some files). <br>"+ 
    "⚪No responsive design for cellphones, as much as i would've liked to incorporate it, this project served it's purpose and i don't wan't it to drag on for longer(2-3 weeks, had to trash quite a bit because i didn't like how somethings turned out).<br>"+ 
    "⚪I would've liked to program my retrieve functions so once retrieved they are stored locally, then once another retrieve request is made they are compared to a local variable and only the new content is added, this mostly affects the chatui, since every few seconds your chat will flash and go to the bottom of the chat making it kinda janky.<br>"+
    "⚪Lots of things to improve but i still think this is a great project, i think it resembles a website that might be used, outside of this blog thing ofcourse.<br>"+
    "⚪Next project will be front-end focused as a little treat for me.<br>"
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