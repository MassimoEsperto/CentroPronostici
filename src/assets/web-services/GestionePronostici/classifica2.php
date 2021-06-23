<?php

require '../connect_local.php';



  $sql = "SELECT DISTINCT fa.id_schedina, fu.id_utente, fu.tempo, ";
  $sql .="	(SELECT SUM(punteggio) AS punteggio from ";
  $sql .="		(SELECT s.id_partita,s.id_schedina, ";
  $sql .="		CASE s.risultato  ";
  $sql .="			WHEN c.risultato THEN t.punti_previsti ";
  $sql .="			WHEN c.doppiachance1 THEN t.punti_previsti ";
  $sql .="			WHEN c.doppiachance2 THEN t.punti_previsti ";
  $sql .="			WHEN c.underover THEN t.punti_previsti ";
  $sql .="			WHEN c.risesatto THEN t.punti_previsti ";
  $sql .="			WHEN c.paridispari THEN t.punti_previsti ";
  $sql .="			WHEN c.golnogol THEN t.punti_previsti ";
  $sql .="			ELSE 0 ";
  $sql .="		END as 'punteggio' ";
  $sql .="		FROM schedina s,calendario c ,punteggio_risultati t,schedina_user u ";
  $sql .="		WHERE  s.id_partita=c.id_partita ";
  $sql .="		AND t.tipo_ris= s.risultato  ";
  $sql .="		AND s.id_schedina= u.id_schedina ";
   $sql .="		UNION ";
  $sql .="		SELECT s.id_partita,s.id_schedina, ";
  $sql .="		CASE s.risultato  ";
  $sql .="			WHEN 'Francia' THEN a.punti_previsti ";
   $sql .="			WHEN 'Belgio' THEN a.punti_previsti ";
  $sql .="			ELSE 0 ";
  $sql .="		END as 'punteggio' ";
  $sql .="		FROM schedina s,scommesse_antepost a ,schedina_user u ";
  $sql .="		WHERE  s.id_partita=a.id_partita ";
  $sql .="		AND s.id_schedina= u.id_schedina ";
  $sql .="		AND s.id_partita= 41 ";
  $sql .="		UNION ";
    $sql .="		SELECT s.id_partita,s.id_schedina, ";
  $sql .="		CASE s.risultato  ";
  $sql .="			WHEN 'Italia' THEN a.punti_previsti ";
   $sql .="			WHEN 'Francia' THEN a.punti_previsti ";
  $sql .="			ELSE 0 ";
  $sql .="		END as 'punteggio' ";
  $sql .="		FROM schedina s,scommesse_antepost a ,schedina_user u ";
  $sql .="		WHERE  s.id_partita=a.id_partita ";
  $sql .="		AND s.id_schedina= u.id_schedina ";
  $sql .="		AND s.id_partita= 42 ";
  $sql .="		UNION ";
  $sql .="		SELECT s.id_partita,s.id_schedina, ";
  $sql .="		CASE s.risultato  ";
  $sql .="			WHEN a.risultato THEN a.punti_previsti ";
  $sql .="			ELSE 0 ";
  $sql .="		END as 'punteggio' ";
  $sql .="		FROM schedina s,scommesse_antepost a ,schedina_user u ";
  $sql .="		WHERE  s.id_partita=a.id_partita ";
  $sql .="		AND s.id_schedina= u.id_schedina ";
  $sql .="		order by id_partita ";
  $sql .="		) punti where id_schedina= fa.id_schedina ";
  $sql .="	) as pt ";
  $sql .="FROM schedina fa,schedina_user fu  ";
  $sql .="WHERE fa.id_schedina = fu.id_schedina ";
  $sql .="group by id_utente, fa.id_schedina order by pt DESC";



 
if($result = mysqli_query($con,$sql))
{
  $index = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $schede[$index]['id_utente']    = $row['id_utente'];
    $schede[$index]['id_schedina'] = $row['id_schedina'];
    $schede[$index]['tempo'] = $row['tempo'];
	$schede[$index]['punteggio'] = $row['pt'];
    $schede[$index]['indice'] = $index+1;
    $index++;
  }
    
 echo json_encode(['data'=>$schede]);
}
else
{
  http_response_code(404);
}