<?php

require '../connect_local.php';
    
$list = [];
$sql = "SELECT id_evento,tipo,partita,risesatto ";
$sql .="FROM _scommesse_risultati WHERE comp_id = {$id_comp} order by id_evento ";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $list[$cr]['id_evento'] = $row['id_evento'];
    $list[$cr]['tipo'] = $row['tipo'];
    $list[$cr]['descrizione'] = $row['partita'];
    $list[$cr]['risultato'] = $row['risesatto'];
    $cr++;
  }
    
 echo json_encode(['data'=>$list]);
}
else
{
  http_response_code(404);
}
