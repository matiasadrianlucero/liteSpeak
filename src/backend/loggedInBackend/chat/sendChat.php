<?php
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";
include_once "./verifyConversation.php";

$conn=startConnection();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if(verifyToken($conn,$_POST["loginToken"],$_POST["id"])&& verifyConversation($_POST["id"],$_POST["convId"],$conn)){
    if($_POST["type"]=="text"){
        $convId="conversationof".$_POST["convId"];
    
        $stmt = $conn->prepare("INSERT INTO $convId (message,userId,type) VALUES (?,?,?)"); 
        $stmt->bind_param("sss",$_POST["message"],$_POST["id"],$_POST["type"]);      
        $stmt->execute();         
    
    
        echo json_encode("SENT");
    } else {
        $convId="conversationof".$_POST["convId"];
        if ($_FILES["message"]["size"] > 5000000) {
            echo json_encode("ERROR: TOO BIG.");
        }
        $target_dir = "../../../img/chatImages/";
        $target_file = $target_dir . basename($_FILES["message"]["name"]);
        $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
        if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg") {
            echo json_encode("ERROR: INVALID FILE.");
        }
        $temp = explode(".", $_FILES["message"]["name"]);
        $newfilename = time() . '.' . end($temp);
        $target_file = $target_dir .  $newfilename;

        $stmt = $conn->prepare("INSERT INTO $convId (message,userId,type) VALUES (?,?,?)"); 
        $stmt->bind_param("sss",$newfilename,$_POST["id"],$_POST["type"]);      
        $stmt->execute();         
        move_uploaded_file($_FILES["message"]["tmp_name"],$target_file);
        echo json_encode("SENT");

    }


} else {
    echo json_encode("DOESN'T BELONG.");
 
}

?>