<?php
require '../connect_local.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  $partita = mysqli_real_escape_string($con, trim($request->data->partita));
  $data = mysqli_real_escape_string($con, trim($request->data->data)); 
  $girone = mysqli_real_escape_string($con, trim($request->data->girone)); 
  $id_evento = mysqli_real_escape_string($con, (int)$request->data->id_evento);
		  
	$sql = "UPDATE `_scommesse_risultati` SET `partita`='{$partita}',`data`='{$data}',`girone`='{$girone}' ";
	$sql .=" WHERE `id_evento` = {$id_evento} LIMIT 1";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $ritorno = [
      'partita' => $partita,
      'data' => $data,
      'girone' => $girone,
      'id_evento' => $id_evento
    ];
    echo json_encode(['data'=>$ritorno]);
  }
  else
  {
    http_response_code(422);
  }
}