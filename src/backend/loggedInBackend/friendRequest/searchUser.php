<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include_once "../../dbconnection/dbConnection.php";
include_once "../../getDataInRows/getUserData.php";

$conn=startConnection();

if($_POST["userToSearch"]){
    $toGet="userId,userName,userEmail,userAvatar";

    if(filter_var($_POST['userToSearch'], FILTER_VALIDATE_EMAIL)){
        $getByColumn="userEmail";
    } else {
        $getByColumn="userName";
    }

    $result=getUserData($conn,$toGet,$getByColumn,$_POST["userToSearch"]);
    echo json_encode($result);
}