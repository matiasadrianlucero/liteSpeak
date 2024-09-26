<?php
function checkIfAlreadyFriend($conn,$sentBy,$sentTo){
    $sanitizedTable = preg_replace('/[^a-zA-Z0-9_]/', '', 'contacts');
    
    $relationship="friend";
    $stmt = $conn->prepare("SELECT id FROM `$sanitizedTable` WHERE `userIdOf1` = ? AND `userIdOf2` = ? and relationship=? OR `userIdOf2` = ? and userIdOf1=? and relationship=?");
    $stmt->bind_param("ssssss",$sentBy,$sentTo,$relationship,$sentBy,$sentTo,$relationship);
    
    $stmt->execute();
    
    $result = $stmt->get_result();
    if ($result && $result->num_rows > 0) {
        return false; // Record exists
    } else {
        return true; // No record found
    }
}