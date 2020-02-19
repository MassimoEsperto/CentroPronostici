<?php
require '../connect_local.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	

  $id_partita = mysqli_real_escape_string($con, (int)$request->data->id_partita);
  $scommessa = mysqli_real_escape_string($con, trim($request->data->scommessa));
  $risultato = mysqli_real_escape_string($con, trim($request->data->risultato));

   // Update.
  $sql = "UPDATE `scommesse_antepost` SET `scommessa`='{$scommessa}',`risultato`='{$risultato}' WHERE `id_partita` = {$id_partita} LIMIT 1";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $car = [
	  'id_partita' => $id_partita,
      'scommessa' => $scommessa,
      'risultato' => $risultato
    ];
    echo json_encode(['data'=>$car]);
  }
  else
  {
    http_response_code(422);
  }
}