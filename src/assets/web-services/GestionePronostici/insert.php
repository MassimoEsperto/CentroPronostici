<?php
require '../connect_local.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
  
  $dati= $request->data;
	
	foreach($dati as $item) 
	{
	
		  // Sanitize.
		  $id_partita = mysqli_real_escape_string($con, (int)$item->id_partita);
          $id_schedina = mysqli_real_escape_string($con, (int)$item->id_schedina);
		  $risultato = mysqli_real_escape_string($con, trim($item->risultato));
 		  $tipo = mysqli_real_escape_string($con, (int)$item->tipo);
		  
          // Store.
		  $sql .= "INSERT INTO `schedina`(`id_partita`, `id_schedina`, `risultato`, `tipo`) VALUES ({$id_partita},{$id_schedina},'{$risultato}',{$tipo});";


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
			  'risposta' => 'ko'
			];
			echo json_encode(['data'=>$ritono]);
	}
	
}