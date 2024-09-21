<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include_once "../../dbconnection/dbConnection.php";
include_once "../../getDataInRows/getUserData.php";
include_once "../verifyToken/verifyToken.php";
include_once "./checkIfRequestExisting.php";
include_once "./checkIfReverseRequestExisting.php";
include_once "./checkIfAlreadyFriend.php";


$conn=startConnection();

if(checkIfAlreadyFriend($conn,$_POST["id"],$_POST["idFriend"])){
    if($_POST["idFriend"]&& verifyToken($conn,$_POST["loginToken"],$_POST["id"]) && checkIfRequestExisting($conn,$_POST["id"],$_POST["idFriend"]) && checkIfReverseRequestExisting($conn,$_POST["id"],$_POST["idFriend"])){

        $status="pending";
        $stmt = $conn->prepare("INSERT INTO friendrequests (sentBy,sentTo,status) values(?,?,?)");
        $stmt->bind_param("sss",$_POST["id"],$_POST["idFriend"],$status);
        
        $stmt->execute();
        
        echo json_encode("SENT");
    } else {
        echo json_encode("REQUEST ALREADY SENT");
    }
} else {
    echo json_encode("CONTACT ADDED, MUTUAL REQUEST");
}
