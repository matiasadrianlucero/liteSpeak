import { retrieveChatLogs } from "./retrieveChatLogs"
import { retrieveChatImage } from "./retrieveChatImage"
export function fillChatLog(loginToken,id,convId){
    let chatLogDiv=document.getElementById("contactChatLogsDiv")
    chatLogDiv.innerHTML=""

    let conversations=retrieveChatLogs(loginToken,id,convId)
    conversations.then(function(data){
        data.map((map,index)=>{
            let msgDiv=document.createElement("div")    
            msgDiv.classList.add("msgDiv")
            if(map[2]=="image"){
                let userImg=document.createElement("img")    
                let imgBackend=retrieveChatImage(map[1])
                imgBackend.then(function(data){
                    var dataURI = "data:image/png;base64," + data;
                    userImg.src = dataURI;
                })
                let textTime=document.createElement("p")
                textTime.innerHTML=map[3]
                textTime.classList.add("chatTime")
                msgDiv.appendChild(userImg)
                msgDiv.appendChild(textTime)

            } else {
                let text=document.createElement("p")
                text.innerHTML=map[1]
                let textTime=document.createElement("p")
                textTime.innerHTML=map[3]
                textTime.classList.add("chatTime")
                msgDiv.appendChild(text)
                msgDiv.appendChild(textTime)

            }
            if(map[0]==localStorage.getItem("username")){

                msgDiv.style.marginLeft="auto"
                msgDiv.style.backgroundColor="black"
            }
            chatLogDiv.appendChild(msgDiv)
            chatLogDiv.scrollTo(0, document.body.scrollHeight);
        })

    })
}