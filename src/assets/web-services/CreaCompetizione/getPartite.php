<?php

require '../connect_local.php';
    
$element = [];
$sql = "SELECT id_evento,partita,girone,data FROM _scommesse_risultati order by id_evento";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $element[$cr]['id_evento'] = $row['id_evento'];
    $element[$cr]['partita'] = $row['partita'];
    $element[$cr]['girone'] = $row['girone'];
    $element[$cr]['data'] = $row['data'];
    $cr++;
  }
    
 echo json_encode(['data'=>$element]);
}
else
{
  http_response_code(404);
}
