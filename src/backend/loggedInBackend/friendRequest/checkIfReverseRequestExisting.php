<?php
function checkIfReverseRequestExisting($conn,$sentBy,$sentTo){
    $sanitizedTable = preg_replace('/[^a-zA-Z0-9_]/', '', 'friendrequests');
    $statusCheck='pending';
    $stmt = $conn->prepare("SELECT * FROM `$sanitizedTable` WHERE `sentBy` = ? AND `sentTo` = ? and status=?");
    $stmt->bind_param("sss",$sentTo,$sentBy,    $statusCheck);
    
    $stmt->execute();
    
    $result = $stmt->get_result();
    if ($result && $result->num_rows > 0) {
        $status='accepted';
        $stmt = $conn->prepare("UPDATE `$sanitizedTable` set status='$status' WHERE `sentBy` = ? AND `sentBy` = ?");
        $stmt->bind_param("ss",$sentTo,$sentBy);
        
        $stmt->execute();
        
        $sanitizedTable = preg_replace('/[^a-zA-Z0-9_]/', '', 'contacts');

        $relationship="friend";
        $stmt = $conn->prepare("INSERT INTO contacts (userIdOf1,userIdOf2,relationship) values(?,?,?)");
        $stmt->bind_param("sss",$sentTo,$sentBy,$relationship);
        
        $stmt->execute();
        //
        $stmt = $conn->prepare("SELECT id FROM contacts where userIdOf1=? and userIdOf2=? or userIdOf2=? and userIdOf1=?");
        $stmt->bind_param("ssss",$sentTo,$sentBy,$sentTo,$sentBy);            
        $stmt->execute();
        $result = $stmt->get_result();
        $contactId = $result->fetch_array(MYSQLI_NUM);
        //
        $newTableName="conversationOf" . $contactId[0];
        $stmt = $conn->prepare("CREATE TABLE $newTableName (
        message varchar(255) NOT NULL,
        userName varchar(255) NOT NULL PRIMARY KEY,
        type enum('text','image') 
            
        )");
        $stmt->execute();
        echo json_encode("FRIEND ADDED");
    } else {
        return true; // No record found
    }
}