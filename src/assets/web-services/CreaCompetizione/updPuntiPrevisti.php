<?php
require '../connect_local.php';

$valore = ($_GET['valore'] !== null && $_GET['valore'] !== '')? mysqli_real_escape_string($con, (int)$_GET['valore']) : false;
$id_punti = ($_GET['id_punti'] !== null && $_GET['id_punti'] !== '')? mysqli_real_escape_string($con, (int)$_GET['id_punti']) : false;
 

if(!$valore)
{
  return http_response_code(400);
}

  $sql = "UPDATE `_punti_previsti` SET `valore`='{$valore}' ";
  $sql .=" WHERE `id_punti` = {$id_punti} LIMIT 1";
  
if($result = mysqli_query($con,$sql))
{
   $ritorno = ['valore' => $valore];
   echo json_encode(['data'=>$ritorno]);
}
else
{
   http_response_code(422);
}