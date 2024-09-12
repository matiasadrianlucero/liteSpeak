<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once '../../dbconnection/dbConnection.php';
require_once '../verification/checkIfExisting.php';
require_once './logInUser.php';

$conn=startConnection();
// Check connection 
if ($conn->connect_error) { 
    die("Connection failure: " 
        . $conn->connect_error); 
}   

if(isset($_POST['email'])){
    $emailCheck=checkIfExisting("userEmail","users",$_POST['email'],$conn);
    if($emailCheck==false){
        try {
            $userEmail=$_POST['email'];
            $userPassword=$_POST['password'];
            
            $table="users";
            $colToCheck="userEmail";
    
            $logInResult=logInUser($userEmail,$userPassword,$table,$colToCheck,$conn);
            
            echo json_encode($logInResult);
        }
         catch (Exception $e) {
            print(['error' => $e->getMessage()]);
        }

    } else {
        // $errorWithFinding="No account found with that email.";

        // echo json_encode($errorWithFinding);
        print("no accoutn email");
    }
}   
?>