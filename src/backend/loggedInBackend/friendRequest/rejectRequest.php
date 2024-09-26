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

if(verifyToken($conn,$_POST["loginToken"],$_POST["id"])){

        $status="rejected";
        $stmt = $conn->prepare("UPDATE friendrequests set status=? where requestId=?");
        $stmt->bind_param("ss",$status,$_POST["requestId"]);
        
        $stmt->execute();
        
        echo json_encode("Rejected");

} else {
    echo json_encode("ERRO1");
}
