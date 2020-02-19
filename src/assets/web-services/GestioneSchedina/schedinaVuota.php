<?php
/**
 * Returns the list of cars.
 */
require '../connect_local.php';

$id_schedina = 	($_GET['id_schedina'] !== null && $_GET['id_schedina'] !== '')? mysqli_real_escape_string($con,(int) $_GET['id_schedina']) : false;
$username = 	($_GET['username'] !== null && $_GET['username'] !== '')? mysqli_real_escape_string($con, $_GET['username']) : false;


 // Validate.
  if(!$id_schedina || !$username)
  {
      die('valori non prelevati'. mysqli_error($con));
  }



$cars = [];
$cr = 0;
$sql1 = "SELECT id_partita,partita,{$id_schedina} as id_schedina,'{$username}' as username FROM calendario";
$sql2 = "SELECT id_partita,scommessa,{$id_schedina} as id_schedina,'{$username}' as username FROM scommesse_antepost";

if($result = mysqli_query($con,$sql1))
{
  
  while($row = mysqli_fetch_assoc($result))
  {
    $cars[$cr]['id_partita'] = $row['id_partita'];
    $cars[$cr]['partita'] = $row['partita'];
    $cars[$cr]['id_schedina'] = $row['id_schedina'];
    $cars[$cr]['username'] = $row['username'];
     $cars[$cr]['risultato'] = '';
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
    $cars[$cr]['partita'] = $row['scommessa'];
    $cars[$cr]['id_schedina'] = $row['id_schedina'];
    $cars[$cr]['username'] = $row['username'];
    $cars[$cr]['risultato'] = '';
    $cars[$cr]['tipo'] = '2';
    $cr++;
  }
    
 echo json_encode(['data'=>$cars]);
}
else
{
  http_response_code(404);
}
