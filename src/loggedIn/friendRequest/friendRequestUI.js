import { searchUser } from "./searchUser"
import { sendFriendRequest } from "./sendFriendRequest"
function debounce(callback, wait) {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        callback(...args);
      }, wait);
    };
  }

export function friendRequestUI(){
    let bodyDiv=document.getElementById("bodyDiv")
    bodyDiv.innerHTML=""

    let friendRequestTitle=document.createElement("p")
    friendRequestTitle.innerHTML="Introduce the name or email of a user you wish to add. They will be added to your contact list once they accept your request"

    bodyDiv.appendChild(friendRequestTitle)
        
    
    let friendRequestInput=document.createElement("input")
    friendRequestInput.id="friendRequestInput"
    friendRequestInput.type="text"
    friendRequestInput.addEventListener("change",debounce(() => {
        let searchData=searchUser(friendRequestInput.value)
        searchData.then(function(data){
                searchResultDiv.innerHTML=""
                searchResultDiv.innerHTML=data        
                searchResultDiv.onclick=function(){
                sendFriendRequest(data[0],localStorage.getItem("id"),localStorage.getItem("loginToken"))
                }

        })
    }, 100))

    bodyDiv.appendChild(friendRequestInput)

    let searchResultDiv=document.createElement("div")
    bodyDiv.appendChild(searchResultDiv)
    
}