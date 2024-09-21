<?php
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once '../../dbconnection/dbConnection.php';
require_once '../verification/checkIfExisting.php';
require_once './insertUser.php';

$conn=startConnection();
// Check connection 
if ($conn->connect_error) { 
    die("Connection failure: " 
        . $conn->connect_error); 
}   

if(isset($_POST['username'])){
    $errorsOnRegistration=[];
    $emailOK=false;
    if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
        $emailOK=true;
    } else {
        array_push($errorsOnRegistration,"Invalid Email");
    }
    $usernameCheck=checkIfExisting("userName","users",$_POST['username'],$conn);
    $emailCheck=checkIfExisting("userEmail","users",$_POST['email'],$conn);
    if($usernameCheck==true && $emailCheck==true &&  $emailOK){

        $userEmail=$_POST['email'];
        $userName=$_POST['username'];
        $userPassword=$_POST['password'];

        $tableName="users";
        $columnNames=["userName","userEmail","userPassword"];
        $valuesStrings=[$userName,$userEmail,$userPassword];

        insertUser($tableName,$columnNames,$valuesStrings,$conn);

        echo json_encode("Account Created!.");
    } else {
        // print("error found");
        if($usernameCheck==false){
            array_push($errorsOnRegistration,"Username Occupied.");
        }
        if($emailCheck==false){
            array_push($errorsOnRegistration,"Email Occupied.");
        }
        echo json_encode($errorsOnRegistration);
    }
}   
?>