<?php
function verifyConv($convId,$userId,$conn){
    $stmt = $conn->prepare("SELECT * FROM `conversations` WHERE conversationId=? AND user1=? OR user2=?");       
    $stmt->bind_param("sss", $convId,$userId,$userId);
    $stmt->execute();             
    $result = $stmt->get_result();

    if($result){
        return true;
    } else {
        return false;
    }
}