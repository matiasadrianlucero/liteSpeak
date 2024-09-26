import { contactsUI } from "./contactsUI";
import { logout } from "../logout/logout";
import { configurationUI } from "../bodyContent/configuration/configurationUI";
import { displayRequestsUI } from "../bodyContent/requests/displayRequestsUI";
// import {loadAvatar} from "../../imageLoader"
// import { retrieveContacts } from "./retrieveContacts";
import { searchUserUI } from "../bodyContent/addContact/searchUserUI";
import { displayDropdown } from "../elements/displayDropdown";
import { notification } from "../elements/notification";
import { userDetailsUI } from "./userDetailsUI";
export function sideBarUI(){    
    ////global div
    let loggedInUI=document.getElementById("loggedInUI")
        ////side bar Div
        
        let sideBarDiv=document.createElement("div")
        sideBarDiv.id="sideBarDiv"
            ////User Div
            let userDiv=document.createElement("div")
            userDiv.id="userDiv"
            userDiv.onmouseup=()=>{
                displayDropdown(userDivDropdown.id)
            }

            let userDivDropdown=document.createElement("div")
            userDivDropdown.id="userDivDropdown"


            let addButton=document.createElement("button")
            addButton.innerHTML="🙋Add a friend"
            addButton.onclick=function(){
                searchUserUI()
            }


            let preferencesButton=document.createElement("button")
            preferencesButton.innerHTML="⚙️Preferences"
            preferencesButton.onclick=function(){
                configurationUI()
            }

            let friendRequests=document.createElement("button")
            friendRequests.innerHTML="🧑‍🤝‍🧑Manage Interactions"
            friendRequests.onclick=function(){
                displayRequestsUI()
            }

            let logoutButton=document.createElement("button")
            logoutButton.innerHTML="🚪Logout"
            logoutButton.onclick=function(){
                logout()
            }
            userDivDropdown.appendChild(addButton)
            userDivDropdown.appendChild(preferencesButton)
            userDivDropdown.appendChild(friendRequests)
            userDivDropdown.appendChild(logoutButton)
            // let userImg=document.createElement("img")
            // let imgBackend=retrieveImage(localStorage.getItem("userAvatar"))

            // imgBackend.then(function(data){
            //     var dataURI = "data:image/png;base64," + data;
            //     userImg.src = dataURI;
            // })
            
            // let userName=document.createElement("p")
            // userName.innerHTML=localStorage.getItem("username")
            // userName.id="userName"
            // let userEmail=document.createElement("p")
            // userEmail.innerHTML=localStorage.getItem("email")
            // userEmail.id="userEmail"

            // userDiv.appendChild(userImg)
            // userDiv.appendChild(userName)
            // userDiv.appendChild(userEmail)
            // userDiv.appendChild(userDivDropdown)
            let contactsDiv=document.createElement("div")
            contactsDiv.id="contactsDiv"
            //
            // let searchInputDiv=document.createElement("div")
            // searchInputDiv.id="searchInputDiv"
            // let searchInput=document.createElement("input")
            // searchInput.id="updateEmailInput"
            // searchInput.type = "text";
            // searchInput.placeholder = "Email";
            // searchInputDiv.appendChild(searchInput)
            //
        sideBarDiv.appendChild(userDiv)
        sideBarDiv.appendChild(userDivDropdown)
        userDivDropdown.style.display="none"
        // sideBarDiv.appendChild(searchInputDiv)
        sideBarDiv.appendChild(contactsDiv)
    ////Append everything
    loggedInUI.appendChild(sideBarDiv)
    ///Fill Contacts
    userDetailsUI()

    contactsUI()
    

}