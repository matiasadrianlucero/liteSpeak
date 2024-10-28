<?php
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
function insertUser($userName,$userEmail,$userPassword,$conn){
        $hashedPassword=password_hash($userPassword, PASSWORD_DEFAULT);
        try {
            $stmt = $conn->prepare("INSERT INTO users (userName,userEmail,userPassword) VALUES (?,?,?)");
            $stmt->bind_param("sss",$userName,$userEmail,$hashedPassword);
            
            $stmt->execute();
        } catch(Exception $e){
            var_dump($e);
        }
}
?>