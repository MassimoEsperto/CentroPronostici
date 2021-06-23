<?php

require '../connect_local.php';


$girone = ($_GET['girone'] !== null && $_GET['girone'] !== '')? mysqli_real_escape_string($con, trim($_GET['girone'])) : false;


if(!$girone)
{
  return http_response_code(400);
}

// Delete.
$sql = "DELETE FROM `_scommesse_antepost_gironi` WHERE `girone` ='{$girone}'";

  if(mysqli_query($con,$sql))
  {
    $ritorno = ['girone' => $girone];
    echo json_encode(['data'=>$ritorno]);
  }
  else
  {
    return http_response_code(400);
  }