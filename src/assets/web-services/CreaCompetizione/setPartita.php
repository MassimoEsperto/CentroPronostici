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
  //$id_evento = mysqli_real_escape_string($con, (int)$request->data->id_evento);
		  
 	$sql = "INSERT INTO `_scommesse_risultati`(`partita`,`data`,`girone`) VALUES ('{$partita}','{$data}','{$girone}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $last_id = mysqli_insert_id($con);
    
    $ritorno = [
      'partita' => $partita,
      'data' => $data,
      'girone' => $girone,
      'id_evento' => $last_id
    ];
    echo json_encode(['data'=>$ritorno]);
  }
  else
  {
    http_response_code(422);
  }
}