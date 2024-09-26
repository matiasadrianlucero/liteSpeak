<?php
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";
include_once "../chat/verifyConversation.php";

$conn=startConnection();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if(verifyToken($conn,$_POST["loginToken"],$_POST["id"])&& verifyConversation($_POST["id"],$_POST["convId"],$conn)){
    $relationship='none';
    $stmt = $conn->prepare("UPDATE contacts set relationship=? where id=?"); 
    $stmt->bind_param("ss",$relationship,$_POST["convId"]);      
    $stmt->execute();         

    echo json_encode("Contact deleted.");

} else {
    echo json_encode("DOESN'T BELONG.");
 
}
