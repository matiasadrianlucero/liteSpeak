<?php
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
    

require_once './handleTokens/createToken.php';
require_once './handleTokens/insertToken.php';
function logInUser($email,$password,$table,$colToCheck, $conn){

    $sanitizedTable = preg_replace('/[^a-zA-Z0-9_]/', '', $table);
    
    $stmt = $conn->prepare("SELECT userName,userEmail,userPassword,userId FROM `$sanitizedTable` WHERE `$colToCheck` = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $resultSTMT = $stmt->get_result();

    $rows = $resultSTMT->fetch_array(MYSQLI_NUM);

    if(password_verify($password, $rows[2])){
        array_splice($rows, 2, 1);
        $_SESSION['id']=$rows[2];
        $_SESSION['loginToken']=createToken();
        $_SESSION['email']=$rows[1];
        $_SESSION['username']=$rows[0];
        insertToken($_SESSION['loginToken'],$conn,$_SESSION['email']);

        array_push($rows,$_SESSION['loginToken']);
        
        return $rows;
    }else {
        return "This password doesn't match this email.";
    }
}
?>