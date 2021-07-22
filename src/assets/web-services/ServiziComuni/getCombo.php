<?php

require '../connect_local.php';


$squadre = [];
$team = [];
$cannonieri = [];
$risultati = [];
$scommesseBase = [];
$puntiPrevisti = [];
$competizioni = [];
$gironi = [];
$totObj = [];

$sql1 = "SELECT nome,girone FROM _lista_squadre WHERE `comp_id` = {$id_comp} order by girone asc";
$sql2 = "SELECT nome FROM _lista_cannonieri WHERE `comp_id` = {$id_comp}";
$sql3 = "SELECT  id_risulato,tipo_ris FROM  _punteggi_risultati order by id_risulato";
$sql4 = "SELECT p.descrizione,s.gruppo_id FROM _scommesse_antepost_base s,_punti_previsti p where s.punti_id=p.id_punti order by s.id_evento";
$sql5 = "SELECT descrizione,valore FROM _punti_previsti order by id_punti";
$sql6 = "SELECT id_comp,descrizione FROM _competizioni WHERE isAttiva=1  order by id_comp";
$sql7 = "SELECT distinct girone FROM _lista_squadre WHERE `comp_id` = {$id_comp} order by girone asc";



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
  http_response_code(400);
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
  http_response_code(401);
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
  http_response_code(402);
}

if($result = mysqli_query($con,$sql5))
{
  $count = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $puntiPrevisti[$count]['descrizione'] = $row['descrizione'];
    $puntiPrevisti[$count]['valore'] = $row['valore'];
    $count++;
  }

}
else
{
  http_response_code(403);
}

if($result = mysqli_query($con,$sql6))
{
  $count = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $competizioni[$count]['id_comp'] = $row['id_comp'];
    $competizioni[$count]['descrizione'] = $row['descrizione'];
   
    $count++;
  }

}
else
{
  http_response_code(404);
}

if($result = mysqli_query($con,$sql7))
{
  $count = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $gironi[$count]['girone'] = $row['girone'];
    $count++;
  }

}
else
{
  http_response_code(400);
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
    $myObj->puntiPrevisti = $puntiPrevisti;
    $myObj->competizioni = $competizioni;
    $myObj->gironi = $gironi;
    
    
	$totObj=['data'=>$myObj];

	$myJSON = json_encode($totObj);
	echo $myJSON;
}
else
{
  http_response_code(405);
}
