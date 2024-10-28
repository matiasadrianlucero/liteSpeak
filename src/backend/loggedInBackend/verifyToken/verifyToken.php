<?php

function verifyToken($conn,$token,$id){    
    if($token!=""){

            $stmt = $conn->prepare("SELECT userName FROM users WHERE userId = ? AND loginToken=?");
            $stmt->bind_param("ss", $id,$token);
            
            $stmt->execute();
            
            $result = $stmt->get_result();
        
            $rows = $result->fetch_array(MYSQLI_NUM);
            if($rows){
                return true;
            } else {
                return false;
            }
            
    } else {
        echo json_encode("LOGINTOKEN DOESN'T MATCH");
        return false;
    }

}
