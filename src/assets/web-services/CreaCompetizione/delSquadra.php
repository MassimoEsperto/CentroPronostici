<?php

require '../connect_local.php';


$nome = ($_GET['nome'] !== null && $_GET['nome'] !== '')? mysqli_real_escape_string($con, trim($_GET['nome'])) : false;


if(!$nome)
{
  return http_response_code(400);
}

// Delete.
$sql = "DELETE FROM `_lista_squadre` WHERE `nome` ='{$nome}' LIMIT 1";

  if(mysqli_query($con,$sql))
  {
    
    $squadra = ['nome' => $nome];
    echo json_encode(['data'=>$squadra]);
  }
  else
  {
    http_response_code(422);
  }