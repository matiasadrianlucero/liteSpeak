function storeLogin(arr){
    localStorage.setItem("username", arr[0]);
    localStorage.setItem("email", arr[1]);
    localStorage.setItem("id", arr[2]);
    localStorage.setItem("loginToken", arr[4]);
    localStorage.setItem("userAvatar", arr[3]);

}   
export {
    storeLogin
}