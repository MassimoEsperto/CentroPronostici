<?php

require '../connect_local.php';



  
$sql = "SELECT DISTINCT p.tipo,p.punti FROM  ";
  $sql .="	(SELECT id_risulato as id, ";
  $sql .="		CASE  ";
  $sql .="			WHEN tipo_ris in ('1','X','2') THEN 'Fisso(1X2)' ";
  $sql .="			WHEN tipo_ris in ('1','X','2') THEN 'Fisso(1X2)' ";
  $sql .="			WHEN tipo_ris in ('1X','X2','12') THEN 'Doppia chance' ";
  $sql .="			WHEN tipo_ris in ('PARI','DISPARI') THEN 'Pari-Dispari'";
  $sql .="			WHEN tipo_ris in ('GOL','NOGOL') THEN 'Gol-NoGol' ";
  $sql .="			WHEN tipo_ris in ('UNDER','OVER') THEN 'Under-Over' ";
  $sql .="			WHEN id_risulato =13 THEN 'Ris Esatto' ";
  $sql .="			ELSE tipo_ris ";
  $sql .="		END as tipo,punti_previsti as punti";
  $sql .="		FROM punteggio_risultati  LIMIT 13";
  $sql .="		UNION ";
  $sql .="		SELECT id_partita as id, ";
  $sql .="		CASE ";
  $sql .="			 WHEN id_partita =43 THEN 'Piazzamento girone' ";
  $sql .="			ELSE scommessa";
  $sql .="		END as tipo, ";
  $sql .="		punti_previsti as punti ";
  $sql .="		 FROM scommesse_antepost LIMIT 18) as p order by p.punti DESC ";



 
if($result = mysqli_query($con,$sql))
{
  $index = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $schede[$index]['tipo']    = $row['tipo'];
    $schede[$index]['punti'] = $row['punti'];
    $index++;
  }
    
 echo json_encode(['data'=>$schede]);
}
else
{
  http_response_code(404);
}