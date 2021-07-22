<?php
require '../connect_local.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  $nome = mysqli_real_escape_string($con, trim($request->data->nome));
		  
  $sql = "INSERT INTO `_lista_cannonieri`(`nome`,`comp_id`) VALUES ('{$nome}',{$id_comp})";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $bomber = ['nome' => $nome];
    echo json_encode(['data'=>$bomber]);
  }
  else
  {
    http_response_code(422);
  }
}