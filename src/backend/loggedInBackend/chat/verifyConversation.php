<?php 
function verifyConversation($id,$convId,$conn){
    try{
        $stmt = $conn->prepare("SELECT id FROM contacts WHERE userIdOf1=? or userIdOf2=? and id=? ");  
        $stmt->bind_param("sss", $id,$id,$convId);
    
        $stmt->execute();         
        $results = $stmt->get_result();
        $rows = $results->fetch_all(MYSQLI_NUM);
        if($rows){
            return true;
        } else {
            return false;
        }
    }catch (exception $e){
        return false;
    }

}