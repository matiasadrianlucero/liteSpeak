<?php
include_once "../../dbconnection/dbConnection.php";
include_once "../verifyToken/verifyToken.php";
$conn=startConnection();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if($_POST["username"]&&$_POST["id"] && $_POST["loginToken"] && $_POST["email"] && verifyToken($conn,$_POST["loginToken"],$_POST["id"])){
    $stmt1 = $conn->prepare("SELECT userId,userName FROM `users` WHERE `userEmail` = ?");
    $stmt1->bind_param("s", $_POST["email"]);
    $stmt1->execute();
    $result1 = $stmt1->get_result();
    $rows1 = $result1->fetch_array(MYSQLI_NUM);

    $stmt2 = $conn->prepare(query: "SELECT * FROM `conversations` WHERE `user1` = ? AND `user2` = ? OR `user1` = ? AND `user2` = ?");
    $stmt2->bind_param("ssss", $rows1[0],$_POST["id"],$_POST["id"],$rows1[0]);
    $stmt2->execute();
    $result2 = $stmt2->get_result();
    $rows2 = $result2->fetch_array(MYSQLI_NUM);
    if($rows2 ){
        echo json_encode("Conversation already exists.");
    } else {
        $stmt3 = $conn->prepare("INSERT INTO `conversations` (user1,user2,username1,username2) VALUES (?,?,?,?)");
        $stmt3->bind_param("ssss", $_POST["id"],$rows1[0],$_POST["username"],$rows[1]);
        $stmt3->execute();

        $stmt4 = $conn->prepare(query: "SELECT conversationId FROM `conversations` WHERE `user1` = ? AND `user2` = ? OR `user1` = ? AND `user2` = ?");
        $stmt4->bind_param("ssss", $rows1[0],$_POST["id"],$_POST["id"],$rows1[0]);
        $stmt4->execute();
        $result4 = $stmt4->get_result();
        $rows4 = $result4->fetch_array(MYSQLI_NUM);
        if($rows4){
            var_dump($rows4);
            $tableName = "conv" . $rows4[0];
            $stmt = $conn->prepare("CREATE TABLE `$tableName` (
                message varchar(255) NOT NULL,
                sender VARCHAR(50) NOT NULL,
                type VARCHAR(50) NOT NULL,
                timeSent TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )");
            $stmt->execute();
        }

    }
} else {
    var_dump("ERROR");
}
?>
