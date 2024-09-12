<?php
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
function insertUser($tableName,$columnNames,$insertValues,$conn){
        $sanitizedTable = preg_replace('/[^a-zA-Z0-9_]/', '', $tableName);

        $userName=$columnNames[0];
        $userEmail=$columnNames[1];
        $userPassword=$columnNames[2];
    
        $hashedPassword=password_hash($insertValues[2], PASSWORD_DEFAULT);
        
        $stmt = $conn->prepare("INSERT INTO $sanitizedTable ($userName,$userEmail,$userPassword) VALUES (?,?,?)");
        $stmt->bind_param("sss",$insertValues[0],$insertValues[1],$hashedPassword);
        
        $stmt->execute();
        //select id to create table

}
?>