<?php
require '../connect_local.php';

$gruppo = ($_GET['gruppo'] !== null && $_GET['gruppo'] !== '')? mysqli_real_escape_string($con, trim($_GET['gruppo'])) : false;
$risultato = ($_GET['risultato'] !== null && $_GET['risultato'] !== '')? mysqli_real_escape_string($con, trim($_GET['risultato'])) : false;
 

if(!$gruppo)
{
  return http_response_code(400);
}


$sql  = "INSERT INTO `_gruppi_antepost_base`(`risultato`,`gruppo`) VALUES ('{$risultato}','{$gruppo}');";
  
 if(mysqli_query($con,$sql))
  {
    $ritorno = ['nome' => $risultato];
    echo json_encode(['data'=>$ritorno]);
  }
  else
  {
    http_response_code(400);
  }
