<?php
function checkTable($conn,$convId){    
        try {
            $conversationTable="conversationof".$convId;
            $stmt = $conn->prepare("SELECT message FROM ?");
            $stmt->bind_param("s", $conversationTable);
            
            $stmt->execute();
            return true;
        } catch(EXCEPTION $e){
            return false;
        }
}
