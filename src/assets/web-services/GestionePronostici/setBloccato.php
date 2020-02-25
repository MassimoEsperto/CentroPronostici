<?php

require '../connect_local.php';

$variabile = ($_GET['variabile'] !== null && $_GET['variabile'] !== '')? mysqli_real_escape_string($con,(int)$_GET['variabile']) : false;

// Validate.
if(!$variabile && $variabile!=0 )
{
   die('valori non prelevati'. mysqli_error($con));
}


// Update.
$sql = "UPDATE `variabile` SET `open`={$variabile}";

if(mysqli_query($con, $sql))
{
  http_response_code(201);
    $tmp = [
      'variabile' => $variabile
    ];
    echo json_encode(['data'=>$tmp]);
}
else
{
  return http_response_code(422);
}