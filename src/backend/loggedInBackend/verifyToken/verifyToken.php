<?php

function verifyToken($conn,$token,$id){    
    if($token!=""){

            $stmt = $conn->prepare("SELECT * FROM `users` WHERE `userId` = ?");
            $stmt->bind_param("s", $id);
            
            $stmt->execute();
            
            $result = $stmt->get_result();
        
            $rows = $result->fetch_array(MYSQLI_NUM);
            if($rows){
                return true;
            } else {
                return false;
            }
            
    } else {
        return false;
    }

}
