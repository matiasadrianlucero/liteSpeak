function checkIfLogged(){
    let result=localStorage.getItem("Username")
    if(result){
        return true
    } else {
        return false
    }
}
export {checkIfLogged}