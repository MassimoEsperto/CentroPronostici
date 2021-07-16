<?php

require '../connect_local.php';


$nome = ($_GET['nome'] !== null && $_GET['nome'] !== '')? mysqli_real_escape_string($con, trim($_GET['nome'])) : false;


if(!$nome)
{
  return http_response_code(400);
}

// Delete.
$sql = "DELETE FROM `_lista_cannonieri` WHERE `nome` ='{$nome}' AND `comp_id` = {$id_comp} LIMIT 1";

  if(mysqli_query($con,$sql))
  {
    
    $bomber = ['nome' => $nome];
    echo json_encode(['data'=>$bomber]);
  }
  else
  {
    http_response_code(422);
  }