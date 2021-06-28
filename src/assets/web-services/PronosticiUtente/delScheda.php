<?php

require '../connect_local.php';

$id_schedina = 	($_GET['id_schedina'] !== null && $_GET['id_schedina'] !== '')? mysqli_real_escape_string($con,(int)$_GET['id_schedina']) : false;

// Validate.
if(!$id_schedina)
{
   die('valori non prelevati'. mysqli_error($con));
}


// Delete.
$sql = "DELETE t1, t2 FROM _schedina as t1 INNER JOIN  _schedina_user as t2 on t1.id_schedina = t2.schedina_id WHERE  t1.id_schedina = {$id_schedina}";

if(mysqli_query($con, $sql))
{
  http_response_code(201);
    $tmp = [
      'id_schedina' => $id_schedina
    ];
    echo json_encode(['data'=>$tmp]);
}
else
{
  return http_response_code(422);
}