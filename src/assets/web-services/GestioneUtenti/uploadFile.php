<?php
 require '../connect_local.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
  
   $dati= $request->data;

    $uploaddir = '../../assets/upload/';
    
    $uploadfile = $uploaddir . basename($_FILES['file']['name']);
 
    if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile)){ 
            echo "OK";
        
    } else {
        echo $request;
        
    }
     }else{
     echo "input vuoto!\n";
     }
?>