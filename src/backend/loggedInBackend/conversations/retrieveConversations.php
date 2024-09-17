<?php
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";
$conn=startConnection();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if(isset($_POST["id"])&&isset($_POST["loginToken"])){
    if(verifyToken($conn,$_POST["loginToken"],$_POST["id"])){
        $tableName="conversations";

        $stmt = $conn->prepare("SELECT * FROM $tableName WHERE user1=? OR user2=?");       
        $stmt->bind_param("ss", $_POST["id"],$_POST["id"]);
        $stmt->execute();         
        $results = $stmt->get_result();
        $rows = $results->fetch_all(MYSQLI_NUM);
 
        echo json_encode($rows);
    }

}
?>