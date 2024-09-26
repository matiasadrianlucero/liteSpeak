<?php
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";
include_once "../chat/verifyConversation.php";

$conn=startConnection();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if(verifyToken($conn,$_POST["loginToken"],$_POST["id"])&& verifyConversation($_POST["id"],$_POST["convId"],$conn)){
    $stmt = $conn->prepare("SELECT id from contacts where id=?"); 
    $stmt->bind_param("s",$_POST["convId"]);      
    $stmt->execute(); 
    $results = $stmt->get_result();
    $rows = $results->fetch_array(MYSQLI_NUM);
    $conversationTable="conversationof".$rows[0];
    $relationship="none";
    $empty="";
    $stmt = $conn->prepare("UPDATE contacts SET relationship=?, blockedBy=? WHERE id=?");
    $stmt->bind_param("sss", $relationship, $empty, $_POST["convId"]);
    $stmt->execute(); 
    echo json_encode("User has been unblocked");
}
