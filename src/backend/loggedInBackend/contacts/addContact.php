<?php
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";
$conn=startConnection();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if(isset($_POST["id"])&&isset($_POST["loginToken"])&&isset($_POST["contactAddress"])&&verifyToken($conn,$_POST["loginToken"],$_POST["id"])){
    try{
        if(filter_var($_POST['contactAddress'], FILTER_VALIDATE_EMAIL)){
            $colToCheck="contactEmail";
        } else {
            $colToCheck="contactName";
        }
        $contactTable = preg_replace('/[^a-zA-Z0-9_]/', '', 'contactsof'. $_POST["id"]);

        $stmt = $conn->prepare("SELECT * FROM `$contactTable` WHERE $colToCheck = ?");
        $stmt->bind_param("s", $_POST['contactAddress']);
        
        $stmt->execute();
        
        $result = $stmt->get_result();
    
        $rows = $result->fetch_array(MYSQLI_NUM);
        if($rows){
            echo json_encode("Already in contact list");
        } else {
            try{
                if(filter_var($_POST['contactAddress'], FILTER_VALIDATE_EMAIL)){
                    $colToCheck="userEmail";
                } else {
                    $colToCheck="userName";
                }

                $stmt = $conn->prepare("SELECT userId,userName,userEmail FROM `users` WHERE $colToCheck = ?");
                $stmt->bind_param("s", $_POST['contactAddress']);
                
                $stmt->execute();
                
                $result = $stmt->get_result();
            
                $rows = $result->fetch_array(MYSQLI_NUM);

                
                $stmt = $conn->prepare("INSERT INTO $contactTable (contactId,contactName,contactEmail,contactImg) VALUES (?,?,?,?)");
                $emptstring="";

                $stmt->bind_param("ssss",$rows[0],$rows[1],$rows[2],$emptstring);
                        
                $stmt->execute();
                    
                echo json_encode("INSERTED");
            }catch(Exception $e){
                var_dump(value: $e);
            }
        }
    }catch(Exception $e){
        var_dump("ERROR FINDING USER");
    }
}

?>