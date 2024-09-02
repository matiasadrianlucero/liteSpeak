function checkPassword(idPassword,idVerifyPassword){
    let password=document.getElementById(idPassword)
    let conPass=document.getElementById(idVerifyPassword)
    if(conPass.value==password.value){
        conPass.setCustomValidity("");
    } else {
        conPass.setCustomValidity("Passwords don't match");
    }
}
export {checkPassword}