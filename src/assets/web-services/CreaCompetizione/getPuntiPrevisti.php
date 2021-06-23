<?php

require '../connect_local.php';
    
$element = [];
$sql = "SELECT id_punti,descrizione,valore FROM `_punti_previsti` ";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $element[$cr]['id'] = $row['id_punti'];
	$element[$cr]['descrizione'] = $row['descrizione'];
	$element[$cr]['valore'] = $row['valore'];
    
    $cr++;
  }
    
 echo json_encode(['data'=>$element]);
}
else
{
  http_response_code(404);
}