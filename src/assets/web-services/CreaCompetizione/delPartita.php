<?php
require '../connect_local.php';

$id_evento = ($_GET['id_evento'] !== null && $_GET['id_evento'] !== '')? mysqli_real_escape_string($con, (int)$_GET['id_evento']) : false;
 

// Delete.
$sql = "DELETE FROM `_scommesse_risultati` WHERE `id_evento` ={$id_evento} LIMIT 1";

  if(mysqli_query($con,$sql))
  {
    
    $ritorno = ['id_evento' => $id_evento];
    echo json_encode(['data'=>$ritorno]);
  }
  else
  {
    http_response_code(400);
  }