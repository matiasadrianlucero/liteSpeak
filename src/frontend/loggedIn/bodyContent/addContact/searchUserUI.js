import { searchUser } from "./searchUser"
import { sendFriendRequest } from "./sendFriendRequest"
import { retrieveImage } from "../../sideBar/retrieve/retrieveImage";
function debounce(callback, wait) {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        callback(...args);
      }, wait);
    };
  }

export function searchUserUI(){
    let bodyDiv=document.getElementById("bodyDiv")
    bodyDiv.innerHTML=""

    let searchDiv=document.createElement("div")
    searchDiv.id="searchDiv"

    
    let friendRequestInput=document.createElement("input")
    friendRequestInput.id="friendRequestInput"
    friendRequestInput.type="text"
    friendRequestInput.placeholder="Search"
    friendRequestInput.addEventListener("keyup",debounce(() => {
        let searchData=searchUser(friendRequestInput.value)
        searchData.then(function(data){
          searchResultDiv.innerHTML=""

          let contactImage=document.createElement("img")
          let imgBackend=retrieveImage(data[3])

          imgBackend.then(function(imgData){
            var dataURI = "data:image/png;base64," + imgData;
            contactImage.src = dataURI;
          })

          let contactName=document.createElement("p")
          contactName.innerHTML=data[1]
          console.log(data)
  
          searchResultDiv.appendChild(contactImage)
          searchResultDiv.appendChild(contactName)
          searchResultDiv.onclick=function(){
            sendFriendRequest(data[0],localStorage.getItem("id"),localStorage.getItem("loginToken"))
          }
        })
    }, 100))

    searchDiv.appendChild(friendRequestInput)

    let searchResultDiv=document.createElement("div")
    searchDiv.appendChild(searchResultDiv)
    bodyDiv.appendChild(searchDiv)
    
}