<?php

require '../connect_local.php';

$id_schedina = 	($_GET['id_schedina'] !== null && $_GET['id_schedina'] !== '')? mysqli_real_escape_string($con,(int)$_GET['id_schedina']) : false;



 // Validate.
if(!$id_schedina)
{
    die('valori non prelevati'. mysqli_error($con));
}


$schede = [];

$sql ="SELECT s.id_partita,s.id_schedina,c.partita,s.risultato ,u.id_utente, ";
$sql .="CASE s.risultato ";
$sql .="    WHEN c.risultato THEN t.punti_previsti ";
$sql .="    WHEN c.doppiachance1 THEN t.punti_previsti ";
$sql .="	WHEN c.doppiachance2 THEN t.punti_previsti ";
$sql .="	WHEN c.underover THEN t.punti_previsti ";
$sql .="	WHEN c.risesatto THEN t.punti_previsti ";
$sql .="	WHEN c.paridispari THEN t.punti_previsti ";
$sql .="	WHEN c.golnogol THEN t.punti_previsti ";
$sql .="   	ELSE 0 ";
$sql .="END as 'punteggio' ";
$sql .="FROM schedina s,calendario c ,punteggio_risultati t,schedina_user u ";
$sql .="WHERE s.id_schedina={$id_schedina} AND s.id_partita=c.id_partita ";
$sql .="AND t.tipo_ris= s.risultato ";
$sql .="AND s.id_schedina= u.id_schedina ";

$sql .="union ";

$sql .="SELECT s.id_partita,s.id_schedina,a.scommessa as partita,s.risultato ,u.id_utente, ";
$sql .="CASE s.risultato  ";
$sql .="   WHEN a.risultato THEN a.punti_previsti ";
$sql .="   ELSE 0 ";
$sql .="END as 'punteggio' ";
$sql .="FROM schedina s,scommesse_antepost a ,schedina_user u ";
$sql .="WHERE s.id_schedina={$id_schedina} AND s.id_partita=a.id_partita ";
$sql .="AND s.id_schedina= u.id_schedina ";
$sql .="order by id_partita ";


if($result = mysqli_query($con,$sql))
{
  $scheda = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $schede[$scheda]['id_partita']    	= $row['id_partita'];
    $schede[$scheda]['id_schedina'] 	= $row['id_schedina'];
    $schede[$scheda]['partita']    		= $row['partita'];
    $schede[$scheda]['risultato'] 		= $row['risultato'];
	$schede[$scheda]['username'] 		= $row['id_utente'];
	$schede[$scheda]['punteggio'] 		= $row['punteggio'];
    $scheda++;
  }
    
 echo json_encode(['data'=>$schede]);
}
else
{
  http_response_code(404);
}
