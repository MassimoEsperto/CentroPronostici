<?php
require '../connect_local.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	

  $id_partita = mysqli_real_escape_string($con, (int)$request->data->id_partita);
  $partita = mysqli_real_escape_string($con, trim($request->data->partita));
  $goalc = mysqli_real_escape_string($con, (int)$request->data->goalc);
  $goalt = mysqli_real_escape_string($con, (int)$request->data->goalt);

  $risultato = mysqli_real_escape_string($con, trim($request->data->risultato));
  $doppiachance1 = mysqli_real_escape_string($con, trim($request->data->doppiachance1));
  $doppiachance2 = mysqli_real_escape_string($con, trim($request->data->doppiachance2));
  $underOver = mysqli_real_escape_string($con, trim($request->data->underOver));
  $risEsatto = mysqli_real_escape_string($con, trim($request->data->risEsatto));
  $pariDispari = mysqli_real_escape_string($con, trim($request->data->pariDispari));
  $golNogol = mysqli_real_escape_string($con, trim($request->data->golNogol));
    
   // Update.
  $sql = "UPDATE `calendario` SET `partita`='{$partita}',`goalc`={$goalc},`goalt`={$goalt}, ";
  $sql .="`risultato`='{$risultato}',`doppiachance1`='{$doppiachance1}',`doppiachance2`='{$doppiachance2}', ";
  $sql .="`underover`='{$underOver}',`risesatto`='{$risEsatto}',`paridispari`='{$pariDispari}', ";
  $sql .="`golnogol`='{$golNogol}' ";
  $sql .=" WHERE `id_partita` = {$id_partita} LIMIT 1";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $car = [
	  'id_partita' => $id_partita,
      'partita' => $partita,
      'goalc' => $goalc,
      'goalt' => $goalt
    ];
    echo json_encode(['data'=>$car]);
  }
  else
  {
    http_response_code(422);
  }
}