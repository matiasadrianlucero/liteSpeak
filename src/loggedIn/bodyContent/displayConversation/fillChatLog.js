import { retrieveChatLogs } from "./retrieveChatLogs"
export function fillChatLog(convId,loginToken,id){
            let chatLogDiv=document.getElementById("chatLogDiv")
    chatLogDiv.innerHTML=""

    let conversations=retrieveChatLogs(convId,loginToken,id)
    conversations.then(function(data){
        data.map((map,index)=>{
            let text=document.createElement("p")
            text.innerHTML=map[0]
            let textTime=document.createElement("p")
            textTime.innerHTML=map[3]

            chatLogDiv.appendChild(text)
            chatLogDiv.appendChild(textTime)
        })

    })
}