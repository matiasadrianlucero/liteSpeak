<?php
     if(!isset($_SESSION)) 
     { 
         session_start(); 
     } 

include_once "../verifyToken/verifyToken.php";
include_once "../../dbconnection/dbConnection.php";
include_once "../..//landingBackend/verification/checkIfExisting.php";
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn=startConnection();
// Check connection 
if ($conn->connect_error) { 
    die("Connection failure: " 
        . $conn->connect_error); 
}   
if ($_POST["loginToken"]!=''&&verifyToken($conn,$_POST["loginToken"],$_POST["id"])){
    switch ($_POST["option"]) {
        case 0:
            $col="userName";
            $return="Username";
            $usernameCheck=checkIfExisting($col,"users",$_POST['updateData'],$conn);
            if($usernameCheck==false){
                echo json_encode("Username Occupied");
                return;
            }     
            break;
        case 1:
            if(filter_var($_POST['updateData'], FILTER_VALIDATE_EMAIL)){
                $col="userEmail";
                $return="Email";
                $usernameCheck=checkIfExisting($col,"users",$_POST['updateData'],$conn);
                if($usernameCheck==false){
                    echo json_encode("Email Occupied");
                    return;
                }     
            } else {
                echo json_encode("Invalid Email Address");
                return;
            }

        break;
    }
    $sanitizedTable = preg_replace('/[^a-zA-Z0-9_]/', '', 'users');

    $stmt = $conn->prepare("UPDATE $sanitizedTable SET $col=? WHERE userId=?");
    $stmt->bind_param("ss",$_POST['updateData'],$_POST['id']);
            
    $stmt->execute();
        
    echo json_encode([$col,$_POST["updateData"]]);
}
?>