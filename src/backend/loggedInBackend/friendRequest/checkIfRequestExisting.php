<?php
function checkIfRequestExisting($conn,$sentBy,$sentTo){
    $sanitizedTable = preg_replace('/[^a-zA-Z0-9_]/', '', 'friendrequests');
    $status='pending';
    $stmt = $conn->prepare("SELECT status FROM `$sanitizedTable` WHERE `sentBy` = ? AND `sentTo` = ? and status=?");
    $stmt->bind_param("sss",$sentBy,$sentTo,$status);
    
    $stmt->execute();
    
    $result = $stmt->get_result();
    if ($result && $result->num_rows > 0) {
        return false; // Record exists
    } else {
        return true; // No record found
    }
}