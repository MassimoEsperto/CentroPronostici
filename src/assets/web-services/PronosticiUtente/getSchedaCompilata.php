<?php

require '../connect_local.php';

$id_schedina = 	($_GET['id_schedina'] !== null && $_GET['id_schedina'] !== '')? mysqli_real_escape_string($con,(int)$_GET['id_schedina']) : false;


// Validate.
if(!$id_schedina)
{
   die('valori non prelevati'. mysqli_error($con));
}


$ele = 0;
$list = [];
$sql1 ="SELECT r.id_evento,r.tipo,r.partita,u.schedina_id,u.utente_id,s.risultato, ";
$sql1 .="CASE s.risultato ";
$sql1 .="   WHEN r.fisso THEN p.valore ";
$sql1 .="   WHEN r.doppiachance1 THEN p.valore ";
$sql1 .="	WHEN r.doppiachance2 THEN p.valore ";
$sql1 .="	WHEN r.underover THEN p.valore ";
$sql1 .="	WHEN r.risesatto THEN p.valore ";
$sql1 .="	WHEN r.paridispari THEN p.valore ";
$sql1 .="	WHEN r.golnogol THEN p.valore ";
$sql1 .="   	ELSE 0 ";
$sql1 .="END as 'punteggio' ";
$sql1 .="FROM _schedina_user u,_schedina s,_scommesse_risultati r ,_punteggi_risultati t,_punti_previsti p ";
$sql1 .="WHERE u.schedina_id={$id_schedina} and u.schedina_id=s.id_schedina and r.id_evento= s.id_evento and r.tipo= s.tipo ";
$sql1 .="AND t.tipo_ris= s.risultato AND t.punti_id= p.id_punti order by r.id_evento ";

$sql2 = "SELECT b.id_evento,b.tipo,p.descrizione,b.gruppo_id,u.schedina_id,u.utente_id,s.risultato, ";
$sql2 .= "CASE ";
$sql2 .= "WHEN (SELECT count(*) FROM _gruppi_antepost_base gb WHERE s.risultato=gb.risultato AND gb.gruppo=b.gruppo_id )>0 THEN p.valore ";
$sql2 .= "ELSE 0  ";
$sql2 .= "END as 'punteggio'  ";
$sql2 .="FROM _schedina_user u,_schedina s,_scommesse_antepost_base b,_punti_previsti p ";
$sql2 .="WHERE b.punti_id=p.id_punti and u.schedina_id={$id_schedina} and u.schedina_id=s.id_schedina and b.id_evento= s.id_evento and b.tipo= s.tipo order by b.id_evento ";
 
 
$sql3 = "SELECT g.id_evento,g.tipo,p.descrizione,g.girone,g.specie,u.schedina_id,u.utente_id,s.risultato, ";
$sql3 .="CASE s.risultato  ";
$sql3 .="   WHEN g.risultato THEN p.valore ";
$sql3 .="   ELSE 0 ";
$sql3 .="END as 'punteggio' ";
$sql3 .="FROM _schedina_user u,_schedina s,_scommesse_antepost_gironi g,_punti_previsti p ";
$sql3 .="WHERE g.punti_id=p.id_punti and u.schedina_id={$id_schedina} and u.schedina_id=s.id_schedina and g.id_evento= s.id_evento and g.tipo= s.tipo order by g.id_evento ";


if($result = mysqli_query($con,$sql1))
{
 
  while($row = mysqli_fetch_assoc($result))
  {
    $list[$ele]['id_evento'] = $row['id_evento'];
    $list[$ele]['descrizione'] = $row['partita'];
    $list[$ele]['risultato'] = $row['risultato'];
	$list[$ele]['id_schedina'] = $row['schedina_id'];
    $list[$ele]['username'] = $row['utente_id'];
    $list[$ele]['punteggio'] = $row['punteggio'];
    $list[$ele]['tipo'] = $row['tipo'];
    $ele++;
  }
    
 
}
else
{
  return http_response_code(400);
}

if($result = mysqli_query($con,$sql2))
{
 
  while($row = mysqli_fetch_assoc($result))
  {
    $list[$ele]['id_evento'] = $row['id_evento'];
    $list[$ele]['descrizione'] = $row['descrizione'];
    $list[$ele]['gruppo'] = $row['gruppo_id'];
    $list[$ele]['risultato'] = $row['risultato'];
	$list[$ele]['id_schedina'] = $row['schedina_id'];
    $list[$ele]['username'] = $row['utente_id'];
    $list[$ele]['punteggio'] = $row['punteggio'];
    $list[$ele]['tipo'] = $row['tipo'];
    $ele++;
  }
    
}
else
{
  return http_response_code(404);
}

if($result = mysqli_query($con,$sql3))
{
 
  while($row = mysqli_fetch_assoc($result))
  {
    $list[$ele]['id_evento'] = $row['id_evento'];
    $list[$ele]['descrizione'] = $row['descrizione'];
    $list[$ele]['girone'] = $row['girone'];
    $list[$ele]['risultato'] = $row['risultato'];
	$list[$ele]['id_schedina'] = $row['schedina_id'];
    $list[$ele]['username'] = $row['utente_id'];
    $list[$ele]['punteggio'] = $row['punteggio'];
    $list[$ele]['tipo'] = $row['tipo'];
    $list[$ele]['specie'] = $row['specie'];
    $ele++;
  }
    
 echo json_encode(['data'=>$list]);
}
else
{
  return http_response_code(402);
}

