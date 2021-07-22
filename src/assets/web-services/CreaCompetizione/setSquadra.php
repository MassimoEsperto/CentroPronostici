<?php
require '../connect_local.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  $nome = mysqli_real_escape_string($con, trim($request->data->nome));
  $girone = mysqli_real_escape_string($con, trim($request->data->girone));
		  
  $sql = "INSERT INTO `_lista_squadre`(`nome`,`girone`,`comp_id`) VALUES ('{$nome}','{$girone}',{$id_comp})";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $squadra = ['nome' => $nome];
    echo json_encode(['data'=>$squadra]);
  }
  else
  {
    http_response_code(422);
  }
}