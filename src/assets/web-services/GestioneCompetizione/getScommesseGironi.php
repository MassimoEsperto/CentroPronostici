<?php

require '../connect_local.php';
    
$list = [];

$sql = "SELECT s.id_evento,s.tipo,p.descrizione,s.girone,s.risultato,s.specie ";
$sql .="FROM _scommesse_antepost_gironi s,_punti_previsti p  ";
$sql .="WHERE s.punti_id=p.id_punti AND comp_id = {$id_comp} order by s.id_evento";

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
	$list[$cr]['specie'] = $row['specie'];
	$cr++;
  }
    
 echo json_encode(['data'=>$list]);
}
else
{
  http_response_code(404);
}
