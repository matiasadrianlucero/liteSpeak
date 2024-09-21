<?php 
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
function checkIfExisting($colToCheck, $table, $colName, $conn) {
    $sanitizedTable = preg_replace('/[^a-zA-Z0-9_]/', '', $table);
    
    $stmt = $conn->prepare("SELECT * FROM `$sanitizedTable` WHERE `$colToCheck` = ?");
    $stmt->bind_param("s", $colName);
    
    $stmt->execute();
    
    $result = $stmt->get_result();
    if ($result && $result->num_rows > 0) {
        return false; // Record exists
    } else {
        return true; // No record found
    }
}
?>
