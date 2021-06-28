<?php

require '../connect_local.php';

$blocco = ($_GET['blocco'] !== null && $_GET['blocco'] !== '')? mysqli_real_escape_string($con,(int)$_GET['blocco']) : false;

$scadenza = ($_GET['scadenza'] !== null && $_GET['scadenza'] !== '')? mysqli_real_escape_string($con, trim($_GET['scadenza'])) : false;

$testo = ($_GET['testo'] !== null && $_GET['testo'] !== '')? mysqli_real_escape_string($con, trim($_GET['testo'])) : false;


$sql = "UPDATE `_opzioni` SET `open`={$variabile}";

// Validate.
if(!$blocco && $blocco!=0 )
{
   die('valori non prelevati'. mysqli_error($con));
}

if($scadenza)
{
	$sql .= ",`scadenza`='{$scadenza}'";
}

if($testo)
{
	$sql .= ",`testo`='{$testo}'";
}

if(mysqli_query($con, $sql))
{
  http_response_code(201);
    $tmp = [
      'blocco' => $blocco
    ];
    echo json_encode(['data'=>$tmp]);
}
else
{
  return http_response_code(422);
}