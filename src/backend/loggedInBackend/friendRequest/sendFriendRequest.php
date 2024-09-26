<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include_once "../../dbconnection/dbConnection.php";
include_once "../../getDataInRows/getUserData.php";
include_once "../verifyToken/verifyToken.php";
include_once "./checkIfRequestExisting.php";
include_once "./checkIfReverseRequestExisting.php";
include_once "./checkIfAlreadyFriend.php";
include_once "./checkIfBlocked.php";


$conn=startConnection();

if(checkIfAlreadyFriend($conn,$_POST["id"],$_POST["idFriend"])&&$_POST["idFriend"]&& 
verifyToken($conn,$_POST["loginToken"],$_POST["id"]) && 
checkIfRequestExisting($conn,$_POST["id"],$_POST["idFriend"]) && 
checkIfReverseRequestExisting($conn,$_POST["id"],$_POST["idFriend"]) &&
checkIfBlocked($_POST["id"],$_POST["idFriend"],$conn)){

        $status="pending";
        $stmt = $conn->prepare("INSERT INTO friendrequests (sentBy,sentTo,status) values(?,?,?)");
        $stmt->bind_param("sss",$_POST["id"],$_POST["idFriend"],$status);
        
        $stmt->execute();
        
        echo json_encode("Friend request sent.");

} else {
    echo json_encode("Unable to send friend request.");
}
