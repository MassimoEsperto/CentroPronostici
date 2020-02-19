<?php
/**
 * Returns the list of cars.
 */
require '../connect_local.php';
    
$cars = [];

$sql = "SELECT id_partita,scommessa,risultato FROM scommesse_antepost";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $cars[$cr]['id_partita'] = $row['id_partita'];
    $cars[$cr]['scommessa'] = $row['scommessa'];
    $cars[$cr]['risultato'] = $row['risultato'];
    $cr++;
  }
    
 echo json_encode(['data'=>$cars]);
}
else
{
  http_response_code(404);
}
