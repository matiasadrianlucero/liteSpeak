<?php
function checkTable($conn,$user1,$user2){    
            $stmt = $conn->prepare("SELECT id FROM contacts where userIdOf1=? and userIdOf2=? or userIdOf2=? and userIdOf1=?");
            $stmt->bind_param("ssss", $user1,$user2, $user1,$user2);
            
            $stmt->execute();
            $results = $stmt->get_result();
            $rows = $results->fetch_array(MYSQLI_NUM);
            try {
                $conversation="conversationof".$rows[0];
                $stmt = $conn->prepare("SELECT message FROM $conversation");                
                $stmt->execute();
                return true;
            } catch(exception $e){
                return false;
            }
        
}
