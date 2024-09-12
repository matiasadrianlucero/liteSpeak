<?php
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";
$conn=startConnection();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if(isset($_POST["id"])&&isset($_POST["loginToken"])){
    if(verifyToken($conn,$_POST["loginToken"],$_POST["id"])){
        $tableName="contactsof".$_POST["id"];

        $stmt ="SELECT contactName,contactEmail,contactImg FROM $tableName";                
        $result = $conn->query($stmt);

        $allRows = $result->fetch_all(MYSQLI_NUM);
 
        echo json_encode($allRows);
    }

}
?>