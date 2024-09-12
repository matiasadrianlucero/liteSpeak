<?php
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
function verifyToken($conn,$token,$id){    
    if($token!=""){
        $stmt = $conn->prepare("SELECT * FROM `users` WHERE `userId` = ?");
        $stmt->bind_param("s", $id);
        
        $stmt->execute();
        
        $result = $stmt->get_result();
    
        $rows = $result->fetch_array(MYSQLI_NUM);
    
    
        if ($rows[4]==$token) {
            return true; // Record exists
        } else {
            return false; // No record found
        }
    }

}
?>