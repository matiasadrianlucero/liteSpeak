<?php
function getUserData($conn,$toGet,$getByColumn,$getBy){
    $columns = explode(',', $toGet);
    $sanitizedColumns = array_map(function($column) {
        return '`' . preg_replace('/[^a-zA-Z0-9_]/', '', trim($column)) . '`';
    }, $columns);
    
    $tableSanitized = implode(', ', $sanitizedColumns);
    
    $stmt = $conn->prepare("SELECT $tableSanitized FROM `users` WHERE $getByColumn = ?");
    $stmt->bind_param("s", $getBy);
    
    $stmt->execute();
    
    $result = $stmt->get_result();

    $rows = $result->fetch_array(MYSQLI_NUM);
    return $rows;
}
?>