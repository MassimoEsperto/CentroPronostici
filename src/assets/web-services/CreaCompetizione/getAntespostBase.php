<?php

require '../connect_local.php';
    
$element = [];
$sql = "SELECT p.descrizione FROM _scommesse_antepost_base s,_punti_previsti p where s.punti_id=p.id_punti order by p.valore DESC,p.id_punti ";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $element[$cr]['descrizione'] = $row['descrizione'];   
    $cr++;
  }
    
 echo json_encode(['data'=>$element]);
}
else
{
  http_response_code(404);
}
