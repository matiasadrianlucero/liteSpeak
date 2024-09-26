<?php
include_once "../verifyToken/verifyToken.php";
include_once "../../dbconnection/dbConnection.php";
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn=startConnection();
if ($_FILES["updateData"]["tmp_name"]&&verifyToken($conn,$_POST["loginToken"],$_POST["id"])){
    try {
    if($_FILES["updateData"]["name"]=="default.jpg"){
        echo json_encode("ERROR: OCCUPIED.");
    }
    if ($_FILES["updateData"]["size"] > 2000000) {
        echo json_encode("ERROR: TOO BIG.");
    }
    //
    $default="default.jpg";

        $stmt = $conn->prepare("SELECT userAvatar from users where userAvatar!=? and userId=?");
        $stmt->bind_param("ss",$default,$_POST["id"]);
        $stmt->execute();
        $result = $stmt->get_result();
        $rows = $result->fetch_array(MYSQLI_NUM);


    //
    $target_dir = "../../../img/avatars/";
    $target_file = $target_dir . basename($_FILES["updateData"]["name"]);
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    //
    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg") {
        echo json_encode("ERROR: INVALID FILE.");
    }
    if($rows){
        $existingFile=$target_dir . $rows[0];
        unlink($existingFile);
    }

    $file_info = pathinfo($_FILES['updateData']['name']);
    $extension = strtolower($file_info['extension']);
        if (file_exists($target_file)) {
            $temp = explode(".", $_FILES["updateData"]["name"]);
            $newfilename = time() . '.' . end(array: $temp);
            $target_file = $target_dir .  $newfilename;

            $sanitizedTable = preg_replace('/[^a-zA-Z0-9_]/', '', 'users');
            $stmt = $conn->prepare("UPDATE $sanitizedTable SET userAvatar=? WHERE userId=?");
            $stmt->bind_param("ss",$newfilename,$_POST['id']);
            $stmt->execute();

            // switch ($extension) {
            //     case 'jpg':
            //         imagejpeg($image ,$target_file,10);
            //     break;
            //     case 'jpeg':
            //        imagejpeg($image ,$target_file,10);
            //     break;
            //     case 'png':
            //         imagepng($image ,$target_file,3);
            //         break;
            //     default:
            //         echo "Unsupported file type.";
            // }

            // move_uploaded_file($_FILES["updateData"]["tmp_name"],$target_file);
        } else {
            $target_file = str_replace(' ', '_', $target_file);
            $targetName = str_replace(' ', '_', $_FILES["updateData"]["name"]);

            $sanitizedTable = preg_replace('/[^a-zA-Z0-9_]/', '', 'users');
            $stmt = $conn->prepare("UPDATE $sanitizedTable SET userAvatar=? WHERE userId=?");
            $stmt->bind_param("ss",$targetName,$_POST['id']);
            $stmt->execute();
            $newfilename=$targetName;
            // switch ($extension) {
            //     case 'jpg':
            //         imagejpeg($image ,$target_file,10);
            //     break;
            //     case 'jpeg':
            //        imagejpeg($image ,$target_file,10);
            //     break;
            //     case 'png':
            //         imagepng($image ,$target_file,3);
            //         break;
            //     default:
            //         echo "Unsupported file type.";
            // }

            // move_uploaded_file($_FILES["updateData"]["tmp_name"],$target_file);
        }
        switch ($extension) {
            case 'jpg':
                $image = imagecreatefromjpeg(filename: $_FILES["updateData"]["tmp_name"]);

                imagejpeg($image ,$target_file,10);
            break;
            case 'jpeg':
                $image = imagecreatefromjpeg(filename: $_FILES["updateData"]["tmp_name"]);

               imagejpeg($image ,$target_file,10);
            break;
            case 'png':
                $image = imagecreatefrompng(filename: $_FILES["updateData"]["tmp_name"]);

                imagepng($image ,$target_file,3);
                break;

        }
        echo json_encode(["userAvatar",$newfilename]);
    } catch(Exception $e){
        print($e);
    }
}