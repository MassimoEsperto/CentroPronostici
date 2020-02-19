<?php
require '../connect_local.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


   // Update.
    $id_partita = mysqli_real_escape_string($con, (int)$request->data->id_partita);
    $id_schedina = mysqli_real_escape_string($con, (int)$request->data->id_schedina);
	$risultato = mysqli_real_escape_string($con, trim($request->data->risultato));
		  
 	$sql = "UPDATE `schedina` SET `risultato`='{$risultato}' ";
    $sql .=" WHERE `id_partita` = {$id_partita} AND `id_schedina` = {$id_schedina} LIMIT 1";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $car = [
	  'id_partita' => $id_partita,
      'id_schedina' => $id_schedina,
      'risultato' => $risultato
    ];
    echo json_encode(['data'=>$car]);
  }
  else
  {
    http_response_code(422);
  }
}