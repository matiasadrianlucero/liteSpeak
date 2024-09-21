<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";

$conn=startConnection();


    if(verifyToken($conn,$_POST["loginToken"],$_POST["id"])){
        $status="rejected";
        $stmt = $conn->prepare("SELECT users.userName,users.userAvatar,friendrequests.requestId,friendrequests.status FROM friendrequests INNER JOIN users ON friendrequests.sentTo=users.userId WHERE sentBy=? AND status!=?");
        $stmt->bind_param("ss",$_POST["id"],$status);
        
        $stmt->execute();
        $results = $stmt->get_result();
        $rows = $results->fetch_all(MYSQLI_NUM);

        echo json_encode($rows);
    } else {
        echo json_encode("REQUEST ALREADY SENT");
    }

