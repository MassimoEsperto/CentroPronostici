<?php
/**
 * Returns the list of cars.
 */
require '../connect_local.php';


$squadre = [];
$cannonieri = [];
$risultati = [];
$totObj = [];

$sql1 = "SELECT DISTINCT SUBSTRING_INDEX(SUBSTRING_INDEX(partita, '-', 1), '-', -1) as squadre,girone FROM calendario order by girone asc";
$sql2 = "SELECT nome FROM cannoniere";
$sql3 = "SELECT  id_risulato,tipo_ris FROM  punteggio_risultati order by id_risulato";



if($result = mysqli_query($con,$sql1))
{
  $count = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $squadre[$count]['squadre'] = $row['squadre'];
    $squadre[$count]['girone'] = $row['girone'];
    $count++;
  }

}
else
{
  http_response_code(404);
}

if($result = mysqli_query($con,$sql2))
{
  $count = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $cannonieri[$count] = $row['nome'];
    $count++;
  }
 	
}
else
{
  http_response_code(404);
}

if($result = mysqli_query($con,$sql3))
{
  $count = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $risultati[$count] = $row['tipo_ris'];
    $count++;
  }
 	
    $myObj->squadre = $squadre;
	$myObj->cannonieri = $cannonieri;
    $myObj->risultati = $risultati;
    
	$totObj=['data'=>$myObj];

	$myJSON = json_encode($totObj);
	echo $myJSON;
}
else
{
  http_response_code(404);
}
