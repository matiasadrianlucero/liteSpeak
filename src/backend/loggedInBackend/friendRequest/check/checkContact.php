-<?php
function checkContact($conn,$user1,$user2){    
            $stmt = $conn->prepare("SELECT id FROM contacts where userIdOf1=? and userIdOf2=? or userIdOf2=? and userIdOf1=?");
            $stmt->bind_param("ssss", $user1,$user2, $user1,$user2);
            
            $stmt->execute();
            $results = $stmt->get_result();
            $rows = $results->fetch_array(MYSQLI_NUM);

            if($rows){
                return true;
            } else {
                return false;
            }
}
?>