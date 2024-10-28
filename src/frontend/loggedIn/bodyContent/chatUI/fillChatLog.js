import { retrieveChatLogs } from "./retrieveChatLogs"
import { retrieveChatImage } from "./retrieveChatImage"

export function fillChatLog(loginToken,id,convId){
    let chatLogDiv=document.getElementById("contactChatLogsDiv")
    if(localStorage.getItem("checkId")!=convId){
        return
    }
    // chatLogDiv.innerHTML=""
    let parsedConversation
    let conversations=retrieveChatLogs(loginToken,id,convId)
    conversations.then(function(data){
        console.log(data)
        if(data.length>0){
            if(localStorage.getItem("lastMessageSent")!="empty"){
                parsedConversation=JSON.parse(localStorage.getItem("conversation"))
                localStorage.setItem("lastMessageSent",data[data.length-1][3])
    
            }
            if(localStorage.getItem("lastMessageSent")=="empty"){
                localStorage.setItem("conversation",JSON.stringify(data))
                
                localStorage.setItem("lastMessageSent",data[data.length-1][3])
    
            }
    
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
                    msgDiv.style.textAlign="center"
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
                }
                chatLogDiv.appendChild(msgDiv)
            })
            
            chatLogDiv.scrollTo(0, chatLogDiv.scrollHeight);    
        }
        setTimeout(()=>{
            fillChatLog(loginToken,id,convId)
        },5000)
    })
}