<?php
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";
$conn=startConnection();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if($_POST["emailOfContact"] && $_POST["idOfUser"] && $_POST["loginToken"] && verifyToken($conn,$_POST["loginToken"],$_POST["idOfUser"])){
    try {
        $tableName="contactsof".$_POST["idOfUser"];

        $stmt =$conn->prepare("DELETE FROM $tableName WHERE contactEmail=?");        
        $stmt->bind_param("s", $_POST['emailOfContact']);
        
        $stmt->execute();
 
        echo json_encode("Contact erased from contact list.");
    }catch(Exception $e){
        var_dump($e);
    }
}

?>