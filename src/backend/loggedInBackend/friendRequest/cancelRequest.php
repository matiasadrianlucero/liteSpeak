<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";

$conn=startConnection();
    if(verifyToken($conn,$_POST["loginToken"],$_POST["id"])&& $_POST["idOfRequest"]){
        $status='rejected';
        $stmt = $conn->prepare("UPDATE friendrequests set status=? where requestId=? and sentBy=?");
        $stmt->bind_param("ss",$status,$_POST["idOfRequest"],$_POST["id"]);
        
        $stmt->execute();
        echo json_encode("REQUEST CANCELLED");
    } else {
        echo json_encode("REQUEST NOT FOUND");
    }

