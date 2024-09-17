<?php
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
function verifyToken($conn,$token,$id){    
    if($token!=""){
        try {
            $stmt = $conn->prepare("SELECT * FROM `users` WHERE `userId` = ?");
            $stmt->bind_param("s", $id);
            
            $stmt->execute();
            
            $result = $stmt->get_result();
        
            $rows = $result->fetch_array(MYSQLI_NUM);
            return true;
        } catch(EXCEPTION $e){
            return false;
        }
    }

}
?>