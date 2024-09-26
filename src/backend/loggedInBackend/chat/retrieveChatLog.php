<?php
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";
include_once "./verifyConversation.php";

$conn=startConnection();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if(verifyToken($conn,$_POST["loginToken"],$_POST["id"])&& verifyConversation($_POST["id"],$_POST["convId"],$conn)){


    $convId="conversationof".$_POST["convId"];

    $stmt = $conn->prepare("SELECT users.userName,$convId.message,$convId.type,$convId.timeSent
    FROM $convId 
    inner join users
    on users.userId=$convId.userId
    ");       
    $stmt->execute();         
    $results = $stmt->get_result();
    $rows = $results->fetch_all(MYSQLI_NUM);
        
    echo json_encode($rows);

} else {
        echo json_encode("ERROR2");
     
}
?>