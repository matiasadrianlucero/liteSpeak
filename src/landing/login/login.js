function login(){
    let loggedUsername=localStorage.getItem("username")
    let loggedEmail=localStorage.getItem("email")
    let loggedToken=localStorage.getItem("loginToken")
    if (loggedUsername!=null &&loggedEmail!=null&loggedToken!=null){
        return true
    } else {
        return false
    }
}
export {login}