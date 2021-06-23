<?php

require '../connect_local.php';
    
$element = [];
$sql = "SELECT distinct girone FROM `_scommesse_antepost_gironi` ";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $element[$cr]['girone'] = $row['girone'];
    $element[$cr]['testo'] = 'Posizionamenti nel girone';    
    $cr++;
  }
    
 echo json_encode(['data'=>$element]);
}
else
{
  http_response_code(404);
}
