<?php
require '../connect_local.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  $testo = mysqli_real_escape_string($con, trim($request->data->testo)); 
  $scadenza = mysqli_real_escape_string($con, trim($request->data->scadenza)); 
  $blocco = mysqli_real_escape_string($con, (int)$request->data->blocco);
		  
  $sql = "UPDATE `_opzioni` SET `open`={$blocco},`scadenza`='{$scadenza}',`testo`='{$testo}'";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    
    $tmp = [
      'blocco' => $blocco
    ];
    echo json_encode(['data'=>$tmp]);
  }
  else
  {
    http_response_code(422);
  }
}