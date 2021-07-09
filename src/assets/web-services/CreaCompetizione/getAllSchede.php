<?php

require '../connect_local.php';
    
$element = [];
$sql = "SELECT schedina_id,utente_id,DATE_FORMAT(tempo, '%d-%m-%Y %H:%i:%s') as tempo,descrizione FROM _schedina_user order by schedina_id ASC";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $element[$cr]['id_schedina'] = $row['schedina_id']; 
    $element[$cr]['id_utente'] = $row['utente_id']; 
    $element[$cr]['tempo'] = $row['tempo']; 
    $element[$cr]['descrizione'] = $row['descrizione']; 
    $cr++;
  }
    
 echo json_encode(['data'=>$element]);
}
else
{
  http_response_code(404);
}
