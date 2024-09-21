import { contactsUI } from "./contactsUI"
import { logout } from "../logout/logout"
import { configurationUI } from "../bodyContent/configuration/configurationUI"

import { displayRequestsUI } from "../bodyContent/requests/displayRequestsUI"
export function sideBarUI(){    
    ////global div
    let loggedInUI=document.getElementById("loggedInUI")
        ////side bar Div
        
        let sideBarDiv=document.createElement("div")
        sideBarDiv.id="sideBarDiv"
            ////User Div
            let userDiv=document.createElement("div")
            userDiv.id="userDiv"

            let userDivDropdown=document.createElement("div")
            userDivDropdown.id="userDivDropdown"

            let preferencesButton=document.createElement("button")
            preferencesButton.innerHTML="Preferences"
            preferencesButton.onclick=function(){
                configurationUI()
            }

            let friendRequests=document.createElement("button")
            friendRequests.innerHTML="Friend Requests"
            friendRequests.onclick=function(){
                displayRequestsUI()
            }

            let logoutButton=document.createElement("button")
            logoutButton.innerHTML="Logout"
            logoutButton.onclick=function(){
                logout()
            }
            userDivDropdown.appendChild(preferencesButton)
            userDivDropdown.appendChild(friendRequests)
            userDivDropdown.appendChild(logoutButton)

            let userImg=document.createElement("img")
            userImg.src=""
            
            let userName=document.createElement("p")
            userName.innerHTML=localStorage.getItem("username")

            let userEmail=document.createElement("p")
            userEmail.innerHTML=localStorage.getItem("email")
            userEmail.id="userEmail"

            userDiv.appendChild(userImg)
            userDiv.appendChild(userName)
            userDiv.appendChild(userEmail)
            userDiv.appendChild(userDivDropdown)
            let contactsDiv=document.createElement("div")
            contactsDiv.id="contactsDiv"
            //
        sideBarDiv.appendChild(userDiv)
        sideBarDiv.appendChild(contactsDiv)
    ////Append everything
    loggedInUI.appendChild(sideBarDiv)
    ///Fill Contacts
    contactsUI()
}