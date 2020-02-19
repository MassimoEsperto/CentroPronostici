<?php
/**
 * Returns the list of cars.
 */
require '../connect_local.php';
    
$cars = [];
$sql = "SELECT id_partita,partita,data,goalc,goalt FROM calendario";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $cars[$cr]['id_partita'] = $row['id_partita'];
    $cars[$cr]['partita'] = $row['partita'];
    $cars[$cr]['data'] = $row['data'];
    $cars[$cr]['goalc'] = $row['goalc'];
    $cars[$cr]['goalt'] = $row['goalt'];
    $cr++;
  }
    
 echo json_encode(['data'=>$cars]);
}
else
{
  http_response_code(404);
}
