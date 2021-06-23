<?php
/**
 * Returns the list of cars.
 */
require '../connect_local.php';


$squadre = [];
$team = [];
$cannonieri = [];
$risultati = [];
$scommesseBase = [];
$totObj = [];

$sql1 = "SELECT nome,girone FROM _lista_squadre order by girone asc";
$sql2 = "SELECT nome FROM _lista_cannonieri";
$sql3 = "SELECT  id_risulato,tipo_ris FROM  _punteggi_risultati order by id_risulato";
$sql4 = "SELECT p.descrizione,s.gruppo_id FROM _scommesse_antepost_base s,_punti_previsti p where s.punti_id=p.id_punti order by s.id_evento";



if($result = mysqli_query($con,$sql1))
{
  $count = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $squadre[$count]['nome'] = $row['nome'];
    $squadre[$count]['girone'] = $row['girone'];
    $team[$count] = $row['nome'];
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

if($result = mysqli_query($con,$sql4))
{
  $count = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $scommesseBase[$count]['id'] = $row['gruppo_id'];
    $scommesseBase[$count]['descrizione'] = $row['descrizione'];
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
    $myObj->scommesseBase = $scommesseBase;
    $myObj->team = $team;
  
    
    
	$totObj=['data'=>$myObj];

	$myJSON = json_encode($totObj);
	echo $myJSON;
}
else
{
  http_response_code(404);
}
