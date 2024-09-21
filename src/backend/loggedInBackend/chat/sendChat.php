<?php
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";
include_once "./verifyConv.php";
include_once "./verifyConversation.php";

$conn=startConnection();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if(verifyToken($conn,$_POST["loginToken"],$_POST["id"])&& verifyConversation($_POST["id"],$_POST["convId"],$conn)){

    $convId="conversationof".$_POST["convId"];

    $stmt = $conn->prepare("INSERT INTO $convId (message,userName,type) VALUES (?,?,?)"); 
    $stmt->bind_param("sss",$_POST["message"],$_POST["username"],$_POST["type"]);      
    $stmt->execute();         

    $result="SENT";
    echo json_encode($result);

} else {
    echo json_encode("DOESN'T BELONG.");
 
}

?>