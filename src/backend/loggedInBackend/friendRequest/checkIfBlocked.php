<?php
function checkIfBlocked($userIdOf1,$userIdOf2,$conn){
    $sanitizedTable = preg_replace('/[^a-zA-Z0-9_]/', '', 'contacts');
    
    $blocked="blocked";
    $stmt = $conn->prepare("SELECT id FROM `$sanitizedTable` WHERE `userIdOf1` = ? AND `userIdOf2` = ? and  relationship=? OR `userIdOf2` = ? and userIdOf1=? and relationship=?");
    $stmt->bind_param("ssssss",$userIdOf1,$userIdOf2,$blocked,$userIdOf1,$userIdOf2,$blocked);
    
    $stmt->execute();
    
    $result = $stmt->get_result();
    if ($result && $result->num_rows > 0) {
        echo json_encode("BLOCKED");
    } else {
        return true; // No record found
    }
}