<?php
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";
include_once "../chat/verifyConversation.php";

$conn=startConnection();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if(verifyToken($conn,$_POST["loginToken"],$_POST["id"])&& verifyConversation($_POST["id"],$_POST["convId"],$conn)){
            $relationship="blocked";
            $stmt = $conn->prepare("UPDATE `contacts` set `relationship`=?,blockedBy=? where id=?"); 
            $stmt->bind_param("sss",$relationship,$_POST["id"],$_POST["convId"]);      
            $stmt->execute(); 
            echo json_encode("Blocked.");
}
