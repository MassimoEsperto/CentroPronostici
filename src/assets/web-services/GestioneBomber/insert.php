<?php
require '../connect_local.php';

$nome = ($_GET['nome'] !== null && $_GET['nome'] !== '')? mysqli_real_escape_string($con, trim($_GET['nome'])) : false;
 

if(!$nome)
{
  return http_response_code(400);
}


  $sql = "INSERT INTO `cannoniere`(`nome`) VALUES ('{$nome}')";

  if(mysqli_query($con,$sql))
  {
    
    $bomber = ['nome' => $nome];
    echo json_encode(['data'=>$bomber]);
  }
  else
  {
    http_response_code(422);
  }
