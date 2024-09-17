<?php
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";
$conn=startConnection();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if(isset($_POST["loginToken"])&&isset($_POST["convId"])&&isset($_POST["username"])&&isset($_POST["chatValue"])&&verifyToken($conn,$_POST["loginToken"],$_POST["id"])){
    if(verifyToken($conn,$_POST["loginToken"],$_POST["id"])){
        $convId="conv".$_POST['convId'];
        $stmt = $conn->prepare("INSERT INTO $convId (message,sender,type) VALUES (?,?,'text')");
        $stmt->bind_param("ss",$_POST["chatValue"],$_POST["username"]);
        
        $stmt->execute();
        echo json_encode("Message Sent");
    } else {

    }

}

?>