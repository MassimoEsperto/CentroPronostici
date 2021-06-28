<?php
require '../connect_local.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
  
  $dati= $request->data;
  $lista= $dati->scheda;
  $id_schedina = mysqli_real_escape_string($con, (int)$dati->id_schedina);
	
	foreach($lista as $item) 
	{
	
		  // Sanitize.
		  $id_evento = mysqli_real_escape_string($con, (int)$item->id_evento);
          $tipo = mysqli_real_escape_string($con, (int)$item->tipo);
		  $risultato = mysqli_real_escape_string($con, trim($item->risultato));
		  
          // Store.
		  $sql .= "INSERT INTO `_schedina`(`id_schedina`,`id_evento`, `tipo`,`risultato`) VALUES ({$id_schedina},{$id_evento},{$tipo},'{$risultato}');";


	}
	if ($con->multi_query($sql) === TRUE) {
    $ritono = [
			  'stato' => $con->positivo,
			  'risposta' => 'ok'
			];
			echo json_encode(['data'=>$ritono]);
	} else {
    $ritono = [
			  'stato' => $con->error,
			  'risposta' => 'ko',
              'query' => $sql
			];
			echo json_encode(['data'=>$ritono]);
	}
	
}