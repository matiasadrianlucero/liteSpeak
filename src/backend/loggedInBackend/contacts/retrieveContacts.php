<?php
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";
$conn=startConnection();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
    if(verifyToken($conn,$_POST["loginToken"],$_POST["id"])){
        $tableName="contactsof".$_POST["id"];

        $relationship='friend';
        try{
            //this query is really ugly
            $stmt =$conn->prepare(
            "SELECT users.userName,users.userAvatar,contacts.id 
            FROM users 
            INNER JOIN contacts 
            ON contacts.userIdOf1=users.userId and users.userId!=?
            OR contacts.userIdOf2=users.userId and users.userId!=?
            where userIdOf1=? 
            and relationship=? 
            or userIdOf2=? 
            and relationship=? 
            -- and contacts.userIdOf1!=?
            -- or contacts.userIdOf2!=? 
            "
            );              
            $stmt->bind_param("ssssss",$_POST["id"],$_POST["id"],$_POST["id"],$relationship,$_POST["id"],$relationship);
      
            $stmt->execute();
    
            $results = $stmt->get_result();
            $rows = $results->fetch_all(MYSQLI_NUM);
         
            echo json_encode($rows);
        } catch(exception $e){
            var_dump($e);
        }

    }
