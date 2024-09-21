import { retrieveChatLogs } from "./retrieveChatLogs"
export function fillChatLog(loginToken,contactName,id,convId){
    let chatLogDiv=document.getElementById("contactChatLogsDiv")
    chatLogDiv.innerHTML=""

    let conversations=retrieveChatLogs(loginToken,contactName,id,convId)
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