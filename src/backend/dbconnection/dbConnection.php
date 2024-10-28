<?php
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 

function startConnection(){
$servername = "litespeak"; 
$username = "root";  
$password = ""; 
  
return $conn = new mysqli("localhost",$username,$password,$servername); 
}
?>