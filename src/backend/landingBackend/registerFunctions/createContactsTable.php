<?php
function createContactsTable($conn,$userEmail){
    $stmt = $conn->prepare("SELECT userId FROM `users` WHERE `userEmail` = ?");
    $stmt->bind_param("s", $userEmail);
    
    $stmt->execute();
    
    $result = $stmt->get_result();

    $rows = $result->fetch_array(MYSQLI_NUM);
    //create table with name contacts+id
    $tableName="contactsOf" . $rows[0];
    $stmt = $conn->prepare("CREATE TABLE $tableName (
    contactId INT(255),
    contactName VARCHAR(50),
    contactEmail VARCHAR(50),
    contactImg VARCHAR(50),

    FOREIGN KEY (contactId) REFERENCES users(userId));"
    );        
    $stmt->execute();
}
?>