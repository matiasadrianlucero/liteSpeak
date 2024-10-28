<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";
include_once  "./check/checkContact.php";
$conn=startConnection();
if(verifyToken($conn,$_POST["loginToken"],$_POST["id"])&&$_POST["requestId"]){
    try{
        $stmt = $conn->prepare("SELECT sentBy,sentTo from friendrequests where requestId=?");
        $stmt->bind_param("s", $_POST["requestId"]);
        $stmt->execute();
        $results = $stmt->get_result();
        $rows = $results->fetch_array(MYSQLI_NUM);
        //
        if(checkContact($conn,$rows[0],$rows[1])){
            $stmt = $conn->prepare("SELECT id FROM contacts where userIdOf1=? and userIdOf2=? or userIdOf2=? and userIdOf1=?");
            $stmt->bind_param("ssss",$rows[0],$rows[1],$rows[0],$rows[1]);            
            $stmt->execute();
            $result = $stmt->get_result();
            $contactId = $result->fetch_array(MYSQLI_NUM);
    
            $relationship="blocked";
            $stmt = $conn->prepare("UPDATE contacts set relationship=?,blockedBy=? where id=? ");
            $stmt->bind_param("sss", $relationship,$_POST["id"],$contactId[0]);
            $stmt->execute();
    
            $status="rejected";
            $stmt = $conn->prepare("UPDATE friendrequests set status=? where requestId=?");
            $stmt->bind_param("ss",$status,$_POST["requestId"]);            
            $stmt->execute();
        } else {
            $relationship="blocked";
            $stmt = $conn->prepare("INSERT INTO contacts (userIdOf1,userIdOf2,relationship,blockedBy) VALUES (?,?,?,?)");
            $stmt->bind_param("ssss", $rows[0],$rows[1],$relationship,$_POST["id"]);
            $stmt->execute();
    
            $status="rejected";
            $stmt = $conn->prepare("UPDATE friendrequests set status=? where requestId=?");
            $stmt->bind_param("ss",$status,$_POST["requestId"]);            
            $stmt->execute();
        }
        echo json_encode("BLOCKED");
    } catch(Exception $e){
        var_dump($e);
    }

}