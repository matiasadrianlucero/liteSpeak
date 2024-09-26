<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";

include_once "./check/checkContact.php";
include_once "./check/checkTable.php";
$conn=startConnection();
    if(verifyToken($conn,$_POST["loginToken"],$_POST["id"])){
        $status='accepted';
        $stmt = $conn->prepare("UPDATE friendrequests set status=? where requestId=?");
        $stmt->bind_param("ss",$status,$_POST["requestId"]);
        $stmt->execute();

        $stmt = $conn->prepare("SELECT sentBy from friendrequests where requestId=? ");
        $stmt->bind_param("s",$_POST["requestId"]);
        $stmt->execute();
        $results = $stmt->get_result();
        $rows = $results->fetch_array(MYSQLI_NUM);

        if(checkContact($conn,$rows[0],$_POST["id"])){
            $relationship='friend';
            $stmt = $conn->prepare("UPDATE contacts set relationship=? where userIdOf1=? and userIdOf2=? or userIdOf2=? and userIdOf1=?");
            $stmt->bind_param("sssss",$relationship,$rows[0],$_POST["id"],$rows[0],$_POST["id"]);
            
            $stmt->execute();
        } else {
            $relationship='friend';
            $stmt = $conn->prepare("INSERT INTO contacts (userIdOf1,userIdOf2,relationship) VALUES (?,?,?)");
            $stmt->bind_param("sss",$_POST["id"],$rows[0],$relationship);            
            $stmt->execute();
        }
        if(checkTable($conn,$rows[0],$_POST["id"])==false||checkTable($conn,$rows[0],$_POST["id"])==null){
            $stmt = $conn->prepare("SELECT id FROM contacts where userIdOf1=? and userIdOf2=? or userIdOf2=? and userIdOf1=?");
            $stmt->bind_param("ssss",$_POST["id"],$rows[0],$_POST["id"],$rows[0]);            
            $stmt->execute();
            $result = $stmt->get_result();
            $contactId = $result->fetch_array(MYSQLI_NUM);

            $newTableName="conversationOf" . $contactId[0];
            $stmt = $conn->prepare("CREATE TABLE $newTableName (
            message varchar(255) NOT NULL,
            userId int(255),
            type enum('text','image'), 
                timeSent TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )");
            $stmt->execute();
        }
    }

