<?php
function checkIfAlreadyFriend($conn,$sentBy,$sentTo){
    $sanitizedTable = preg_replace('/[^a-zA-Z0-9_]/', '', 'contacts');
    
    $stmt = $conn->prepare("SELECT id FROM `$sanitizedTable` WHERE `userIdOf1` = ? AND `userIdOf2` = ? OR `userIdOf2` = ? AND `userIdOf1` = ?");
    $stmt->bind_param("ssss",$sentBy,$sentTo,$sentBy,$sentTo);
    
    $stmt->execute();
    
    $result = $stmt->get_result();
    if ($result && $result->num_rows > 0) {
        print("friend");
        return false; // Record exists
    } else {
        print("not friend");
        return true; // No record found
    }
}