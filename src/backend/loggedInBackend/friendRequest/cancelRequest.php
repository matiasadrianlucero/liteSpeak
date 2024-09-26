<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";

$conn=startConnection();
    if(verifyToken($conn,$_POST["loginToken"],$_POST["id"])&& $_POST["idOfRequest"]){
        $stmt = $conn->prepare("DELETE FROM friendrequests where requestId=? and sentBy=?");
        $stmt->bind_param("ss",$_POST["idOfRequest"],$_POST["id"]);
        
        $stmt->execute();
        echo json_encode("Request cancelled");
    } else {
        echo json_encode("Error: not logged in.");
    }

