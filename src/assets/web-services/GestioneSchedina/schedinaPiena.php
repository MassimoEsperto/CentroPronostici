<?php
/**
 * Returns the list of cars.
 */
require '../connect_local.php';

$id_schedina = 	($_GET['id_schedina'] !== null && $_GET['id_schedina'] !== '')? mysqli_real_escape_string($con,(int)$_GET['id_schedina']) : false;



 // Validate.
  if(!$id_schedina)
  {
      die('valori non prelevati'. mysqli_error($con));
  }


$cr = 0;
$cars = [];
$sql1 ="SELECT c.id_partita,c.partita,u.id_schedina,u.id_utente as username,s.risultato FROM schedina_user u,schedina s,calendario c WHERE u.id_schedina={$id_schedina} and u.id_schedina=s.id_schedina and c.id_partita= s.id_partita order by c.id_partita";
$sql2 ="SELECT c.id_partita,c.scommessa as partita,u.id_schedina,u.id_utente as username,s.risultato FROM schedina_user u,schedina s,scommesse_antepost c WHERE u.id_schedina={$id_schedina} and u.id_schedina=s.id_schedina and c.id_partita= s.id_partita  order by c.id_partita";


if($result = mysqli_query($con,$sql1))
{
 
  while($row = mysqli_fetch_assoc($result))
  {
    $cars[$cr]['id_partita'] = $row['id_partita'];
    $cars[$cr]['partita'] = $row['partita'];
    $cars[$cr]['id_schedina'] = $row['id_schedina'];
    $cars[$cr]['username'] = $row['username'];
    $cars[$cr]['risultato'] = $row['risultato'];
    $cars[$cr]['tipo'] = '1';
    $cr++;
  }
    
 
}
else
{
  http_response_code(404);
}

if($result = mysqli_query($con,$sql2))
{
 
  while($row = mysqli_fetch_assoc($result))
  {
    $cars[$cr]['id_partita'] = $row['id_partita'];
    $cars[$cr]['partita'] = $row['partita'];
    $cars[$cr]['id_schedina'] = $row['id_schedina'];
    $cars[$cr]['username'] = $row['username'];
    $cars[$cr]['risultato'] = $row['risultato'];
    $cars[$cr]['tipo'] = '2';
    $cr++;
  }
    
 echo json_encode(['data'=>$cars]);
}
else
{
  http_response_code(404);
}