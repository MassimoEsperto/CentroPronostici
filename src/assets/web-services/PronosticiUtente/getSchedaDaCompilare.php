<?php

require '../connect_local.php';

$ele = 0;
$list = [];
$sql1 ="SELECT r.id_evento,r.tipo,r.partita FROM _scommesse_risultati r WHERE r.comp_id = {$id_comp} order by r.id_evento";

$sql2 = "SELECT b.id_evento,b.tipo,p.descrizione,b.gruppo_id ";
$sql2 .="FROM _scommesse_antepost_base b,_punti_previsti p ";
$sql2 .="WHERE b.punti_id=p.id_punti order by b.id_evento ";
 
$sql3 = "SELECT s.id_evento,s.tipo,p.descrizione,s.girone,s.specie ";
$sql3 .="FROM _scommesse_antepost_gironi s,_punti_previsti p  ";
$sql3 .="WHERE s.punti_id=p.id_punti AND s.comp_id = {$id_comp} order by s.id_evento ";


if($result = mysqli_query($con,$sql1))
{
 
  while($row = mysqli_fetch_assoc($result))
  {
    $list[$ele]['id_evento'] = $row['id_evento'];
    $list[$ele]['descrizione'] = $row['partita'];
    $list[$ele]['risultato'] = "";
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
    $list[$ele]['risultato'] = "";
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
    $list[$ele]['risultato'] = "";
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