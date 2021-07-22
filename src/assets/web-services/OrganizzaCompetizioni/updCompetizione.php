<?php
require '../connect_local.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	

  $id = mysqli_real_escape_string($con, (int)$request->data->id_comp);
  $sigla = mysqli_real_escape_string($con, trim($request->data->sigla));
  $descrizione = mysqli_real_escape_string($con, trim($request->data->descrizione));
  $isAttiva = mysqli_real_escape_string($con, (int)$request->data->isAttiva);
  $footer = mysqli_real_escape_string($con, trim($request->data->footer)); 
  $scadenza = mysqli_real_escape_string($con, trim($request->data->scadenza)); 
  $isOpen = mysqli_real_escape_string($con, (int)$request->data->isOpen);

   // Update.
  $sql = "UPDATE `_competizioni` SET `sigla`='{$sigla}',`descrizione`='{$descrizione}',`isAttiva`={$isAttiva}, ";
  $sql .="`footer`='{$footer}',`scadenza`='{$scadenza}',`isOpen`={$isOpen} WHERE `id_comp` = {$id} LIMIT 1";
  
  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $obj = [
	  'id_evento' => $id
    ];
    echo json_encode(['data'=>$obj]);
  }
  else
  {
    http_response_code(422);
  }
}