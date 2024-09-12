<?php
      if(!isset($_SESSION)) 
      { 
          session_start(); 
      } 

function createToken(){
        return bin2hex(random_bytes(32));
}
?>