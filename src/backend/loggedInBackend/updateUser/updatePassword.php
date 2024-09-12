<?php
     if(!isset($_SESSION)) 
     { 
         session_start(); 
     } 

include_once "../verifyToken/verifyToken.php";
include_once "../../dbconnection/dbConnection.php";
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn=startConnection();
// Check connection 
if ($conn->connect_error) { 
    die("Connection failure: " 
        . $conn->connect_error); 
}   
    if($_POST["loginToken"]!='' && verifyToken($conn,$_POST["loginToken"],$_POST["id"]) && $_POST["updatePassword"]&& $_POST["verifyPassword"]){
        $sanitizedTable = preg_replace('/[^a-zA-Z0-9_]/', '', 'users');
    
        $stmt = $conn->prepare("SELECT userPassword FROM `$sanitizedTable` WHERE `userId` = ?");
        $stmt->bind_param("s", $_POST["id"]);
        $stmt->execute();
        $resultSTMT = $stmt->get_result();
    
        $rows = $resultSTMT->fetch_array(MYSQLI_NUM);
    
        if(password_verify($_POST["verifyPassword"], $rows[0])){
            $sanitizedTable = preg_replace('/[^a-zA-Z0-9_]/', '', 'users');

            $hashedPassword=password_hash($_POST["updatePassword"], PASSWORD_DEFAULT);
            $stmt = $conn->prepare("UPDATE $sanitizedTable SET userPassword=? WHERE userId=?");
            $stmt->bind_param("ss",$hashedPassword,$_POST['id']);
            
            $stmt->execute();
             
            print("Password Updated");

        }else {
            print("Password doesn't match this account");
    
            // throw new Exception("Password doesn't match this email address");
        }


        
}

?>