<?php
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";

$conn=startConnection();
header('Content-Type: image/png');

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
    if(verifyToken($conn,$_POST["loginToken"],$_POST["id"])){
        try{
            $target_dir = "../../../img/chatImages/".$_POST["image"];
            $imageContent = file_get_contents($target_dir);
            $base64Image = base64_encode($imageContent);
            echo json_encode($base64Image);
        } catch(exception $e){
            var_dump($e);
        }

    }
