<?php
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 

function insertToken($token,$conn,$email){
    if($token!=''){
        $sanitizedTable = preg_replace('/[^a-zA-Z0-9_]/', '', 'users');

        $stmt = $conn->prepare("UPDATE $sanitizedTable SET loginToken=? WHERE userEmail=?");
        $stmt->bind_param("ss",$token,$email);
        
        $stmt->execute();
    }

}

?>