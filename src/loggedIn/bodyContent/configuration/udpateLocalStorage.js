function updateLocalStorage(data){
    console.log(data)
    switch(data[0]){
        case "userName":
            localStorage.setItem("username",data[1])
            break
        case "userEmail":
            localStorage.setItem("email",data[1])
            break
        case "userAvatar":
            console.log(localStorage.getItem("userAvatar",data[1]))
            localStorage.setItem("userAvatar",data[1])
        break
    }
    
}
export {updateLocalStorage}