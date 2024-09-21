<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";

$conn=startConnection();
    if(verifyToken($conn,$_POST["loginToken"],$_POST["id"])&& $_POST["requestId"]){
        $stmt = $conn->prepare("SELECT id FROM friendrequests where userIdOf1=? and userIdOf2=? or userIdOf2=? and userIdOf2=1 ");
        $stmt->bind_param("ss",$_POST["requestId"],$_POST["id"],$_POST["requestId"],$_POST["id"]);
        
        $stmt->execute();
        $result = $stmt->get_result();
        $rows = $result->fetch_array(MYSQLI_NUM);
        if($rows){
            echo json_encode(value: "already friend");

        } else {
            $status='accepted';
            $stmt = $conn->prepare("UPDATE friendrequests set status=? where requestId=? and sentTo=?");
            $stmt->bind_param("sss",$status,$_POST["requestId"],$_POST["id"]);
            
            $stmt->execute();
            //
            $stmt = $conn->prepare("SELECT sentBy FROM friendrequests where requestId=? and sentTo=?");
            $stmt->bind_param("ss",$_POST["requestId"],$_POST["id"]);            
            $stmt->execute();
            $result = $stmt->get_result();
            $rows = $result->fetch_array(MYSQLI_NUM);
            //
            $relationship='friend';
            $stmt = $conn->prepare("INSERT INTO contacts (userIdOf1,userIdOf2,relationship) VALUES (?,?,?)");
            $stmt->bind_param("sss",$_POST["id"],$rows[0],$relationship);            
            $stmt->execute();
            //
            $stmt = $conn->prepare("SELECT id FROM contacts where userIdOf1=? and userIdOf2=? or userIdOf2=? and userIdOf1=?");
            $stmt->bind_param("ssss",$_POST["id"],$rows[0],$_POST["id"],$rows[0]);            
            $stmt->execute();
            $result = $stmt->get_result();
            $contactId = $result->fetch_array(MYSQLI_NUM);
            //
            $newTableName="conversationOf" . $contactId[0];
            $stmt = $conn->prepare("CREATE TABLE $newTableName (
            message varchar(255) NOT NULL,
            userName varchar(255) NOT NULL PRIMARY KEY,
            type enum('text','image') 
    
            )");
            $stmt->execute();
    
    
            echo json_encode(value: "ACCEPTED");
        }
    } else {
        echo json_encode("REQUEST NOT FOUND");
    }

