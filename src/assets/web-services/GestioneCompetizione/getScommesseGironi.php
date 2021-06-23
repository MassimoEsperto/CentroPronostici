<?php
/**
 * Returns the list of cars.
 */
require '../connect_local.php';
    
$list = [];

$sql = "SELECT s.id_evento,s.tipo,p.descrizione,s.girone,s.risultato FROM _scommesse_antepost_gironi s,_punti_previsti p where s.punti_id=p.id_punti order by s.id_evento";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $list[$cr]['id_evento'] = $row['id_evento'];
    $list[$cr]['tipo'] = $row['tipo'];
    $list[$cr]['descrizione'] = $row['descrizione'] . " " . $row['girone'];
    $list[$cr]['risultato'] = $row['risultato'];
    $list[$cr]['girone'] = $row['girone'];
    $cr++;
  }
    
 echo json_encode(['data'=>$list]);
}
else
{
  http_response_code(404);
}
