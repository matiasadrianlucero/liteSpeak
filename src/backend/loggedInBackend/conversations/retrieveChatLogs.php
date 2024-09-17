<?php
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";
include_once "./verifyConv.php";

$conn=startConnection();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if( verifyToken($conn,$_POST["loginToken"],$_POST["id"] ) && verifyConv($_POST["convId"],$_POST["id"],$conn) ){
        $convId="conv".$_POST['convId'];

        $stmt = $conn->prepare("SELECT * FROM $convId");       
        $stmt->execute();         
        $results = $stmt->get_result();
        $rows = $results->fetch_all(MYSQLI_NUM);

        echo json_encode($rows);
}
?>