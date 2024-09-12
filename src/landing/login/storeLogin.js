function storeLogin(arr){
    localStorage.setItem("username", arr[0]);
    localStorage.setItem("email", arr[1]);
    localStorage.setItem("id", arr[2]);
    localStorage.setItem("loginToken", arr[3]);

}
export {
    storeLogin
}