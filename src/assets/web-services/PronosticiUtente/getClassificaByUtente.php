<?php

require '../connect_local.php';

$username = ($_GET['username'] !== null && $_GET['username'] !== '')? mysqli_real_escape_string($con, trim($_GET['username'])) : false;


$sql = "SELECT DISTINCT fa.id_schedina, fu.utente_id,DATE_FORMAT(fu.tempo, '%d-%m-%Y %H:%i:%s') as tempo, ";
$sql .="(SELECT SUM(punteggio) AS punteggio from ( ";
$sql .="SELECT r.id_evento,r.tipo,u.schedina_id, "; 
$sql .="CASE s.risultato "; 
$sql .="   WHEN r.fisso THEN p.valore "; 
$sql .="   WHEN r.doppiachance1 THEN p.valore "; 
$sql .="	WHEN r.doppiachance2 THEN p.valore "; 
$sql .="	WHEN r.underover THEN p.valore "; 
$sql .="	WHEN r.risesatto THEN p.valore "; 
$sql .="	WHEN r.paridispari THEN p.valore "; 
$sql .="	WHEN r.golnogol THEN p.valore "; 
$sql .="   	ELSE 0 "; 
$sql .="END as 'punteggio' "; 
$sql .="FROM _schedina_user u,_schedina s,_scommesse_risultati r ,_punteggi_risultati t,_punti_previsti p "; 
$sql .="WHERE u.schedina_id=s.id_schedina and r.id_evento= s.id_evento and r.tipo= s.tipo "; 
$sql .="AND t.tipo_ris= s.risultato AND t.punti_id= p.id_punti "; 
$sql .="	UNION ";
$sql .="	SELECT b.id_evento,b.tipo,u.schedina_id, ";
$sql .="CASE ";
$sql .="WHEN (SELECT count(*) FROM _gruppi_antepost_base gb WHERE s.risultato=gb.risultato AND gb.gruppo=b.gruppo_id )>0 THEN p.valore "; 
$sql .="ELSE 0 "; 
$sql .="END as 'punteggio' ";
$sql .="FROM _schedina_user u,_schedina s,_scommesse_antepost_base b,_punti_previsti p ";
$sql .="WHERE b.punti_id=p.id_punti and u.schedina_id=s.id_schedina and b.id_evento= s.id_evento and b.tipo= s.tipo "; 
$sql .="UNION ";	
$sql .="	SELECT g.id_evento,g.tipo,u.schedina_id, ";
$sql .="CASE s.risultato ";  
$sql .="   WHEN g.risultato THEN p.valore "; 
$sql .="   ELSE 0 ";
$sql .="END as 'punteggio' ";
$sql .="FROM _schedina_user u,_schedina s,_scommesse_antepost_gironi g,_punti_previsti p "; 
$sql .="WHERE g.punti_id=p.id_punti and u.schedina_id=s.id_schedina and g.id_evento= s.id_evento and g.tipo= s.tipo order by id_evento "; 
$sql .="	) punti where schedina_id= fa.id_schedina "; 
$sql .=") as pt ";
$sql .="  FROM _schedina fa,_schedina_user fu "; 
$sql .="  WHERE fa.id_schedina = fu.schedina_id ";
$sql .="  AND fu.utente_id ='{$username}' ";
$sql .="  group by fa.id_schedina order by fa.id_schedina ASC ";
  

 
if($result = mysqli_query($con,$sql))
{
  $index = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $schede[$index]['id_utente']    = $row['utente_id'];
    $schede[$index]['id_schedina'] = $row['id_schedina'];
    $schede[$index]['tempo'] = $row['tempo'];
	$schede[$index]['punteggio'] = $row['pt'];
    $schede[$index]['posizione'] = $index+1;
    $index++;
  }
    
 echo json_encode(['data'=>$schede]);
}
else
{
   echo json_encode(['data'=>$sql]);
}