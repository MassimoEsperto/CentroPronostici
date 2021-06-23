<?php
require '../connect_local.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	

  $id_evento = mysqli_real_escape_string($con, (int)$request->data->id_evento);
  $risultato = mysqli_real_escape_string($con, trim($request->data->risultato));

   // Update.
  $sql = "UPDATE `_scommesse_antepost_gironi` SET `risultato`='{$risultato}' WHERE `id_evento` = {$id_evento} LIMIT 1";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $obj = [
	  'id_evento' => $id_evento,
      'risultato' => $risultato
    ];
    echo json_encode(['data'=>$obj]);
  }
  else
  {
    http_response_code(422);
  }
}