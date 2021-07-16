<?php
require '../connect_local.php';

$nome = ($_GET['nome'] !== null && $_GET['nome'] !== '')? mysqli_real_escape_string($con, trim($_GET['nome'])) : false;
$girone = ($_GET['girone'] !== null && $_GET['girone'] !== '')? mysqli_real_escape_string($con, trim($_GET['girone'])) : false;
 

if(!$nome)
{
  return http_response_code(400);
}


  $sql = "INSERT INTO `_lista_squadre`(`nome`,`girone`,`comp_id`) VALUES ('{$nome}','{$girone}',{$id_comp})";

  if(mysqli_query($con,$sql))
  {
    
    $squadra = ['nome' => $nome];
    echo json_encode(['data'=>$squadra]);
  }
  else
  {
    http_response_code(422);
  }
