<?php
function startConnection(){
$servername = "litespeak"; 
$username = "root";  
$password = ""; 
  
// Creating a connection 
return $conn = new mysqli("localhost",$username,$password,$servername); 
}
?>