<?php
require '../connect_local.php';

$gruppo = ($_GET['gruppo'] !== null && $_GET['gruppo'] !== '')? mysqli_real_escape_string($con, trim($_GET['gruppo'])) : false;
$risultato = ($_GET['risultato'] !== null && $_GET['risultato'] !== '')? mysqli_real_escape_string($con, trim($_GET['risultato'])) : false;
 

if(!$gruppo)
{
  return http_response_code(400);
}
// Delete.
$sql = "DELETE FROM `_gruppi_antepost_base` WHERE `gruppo` ='{$gruppo}' AND `risultato` ='{$risultato}' ";

  if(mysqli_query($con,$sql))
  {
    
    $ritorno = ['id_evento' => $risultato];
    echo json_encode(['data'=>$ritorno]);
  }
  else
  {
    http_response_code(400);
  }