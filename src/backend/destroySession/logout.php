<?php

require_once './destroySession.php';
require_once '../dbconnection/dbConnection.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

$conn=startConnection();
if(isset($_POST['logout'])){
        $email=$_POST['email'];

        $sanitizedTable = preg_replace('/[^a-zA-Z0-9_]/', '', 'users');

        $stmt = $conn->prepare("UPDATE $sanitizedTable SET loginToken=NULL WHERE userEmail=?");
        $stmt->bind_param("s",$email);
        
        $stmt->execute();

        destroySession();
}
?>