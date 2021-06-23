<?php
/**
 * Returns the list of cars.
 */
require '../connect_local.php';
    
$list = [];

$sql = "SELECT s.id_evento,s.gruppo_id,s.tipo,p.descrizione,g.risultato FROM _scommesse_antepost_base s,_punti_previsti p,_gruppi_antepost_base g where s.punti_id=p.id_punti and g.gruppo=s.gruppo_id order by s.id_evento";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $list[$cr]['id_evento'] = $row['id_evento'];
    $list[$cr]['tipo'] = $row['tipo'];
    $list[$cr]['descrizione'] = $row['descrizione'];
    $list[$cr]['risultato'] = $row['risultato'];
    $list[$cr]['gruppo'] = $row['gruppo_id'];
    $cr++;
  }
    
 echo json_encode(['data'=>$list]);
}
else
{
  http_response_code(404);
}
