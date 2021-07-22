<?php

require '../connect_local.php';

$element = [];

$sql = "SELECT id_comp,sigla,descrizione,isAttiva,scadenza,footer,isOpen FROM _competizioni ";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $element[$cr]['id_comp'] = $row['id_comp'];
    $element[$cr]['sigla'] = $row['sigla'];
	$element[$cr]['descrizione'] = $row['descrizione'];	
	$element[$cr]['isAttiva'] = $row['isAttiva'];	
    $element[$cr]['scadenza'] = $row['scadenza'];
	$element[$cr]['footer'] = $row['footer'];	
	$element[$cr]['isOpen'] = $row['isOpen'];	
    $cr++;
  }
  
   echo json_encode(['data'=>$element]);
   
} else {
	  http_response_code(404);
	
}