<?php
require '../connect_local.php';

$girone = ($_GET['girone'] !== null && $_GET['girone'] !== '')? mysqli_real_escape_string($con, trim($_GET['girone'])) : false;
 

if(!$girone)
{
  return http_response_code(400);
}


  $sql  = "INSERT INTO `_scommesse_antepost_gironi`(`girone`,`punti_id`,`comp_id`) VALUES ('{$girone}',11,{$id_comp});";
  $sql .= "INSERT INTO `_scommesse_antepost_gironi`(`girone`,`punti_id`,`comp_id`) VALUES ('{$girone}',12,{$id_comp});";
  $sql .= "INSERT INTO `_scommesse_antepost_gironi`(`girone`,`punti_id`,`comp_id`) VALUES ('{$girone}',13,{$id_comp});";
  $sql .= "INSERT INTO `_scommesse_antepost_gironi`(`girone`,`punti_id`,`comp_id`) VALUES ('{$girone}',14,{$id_comp});";
  $sql .= "INSERT INTO `_scommesse_antepost_gironi`(`girone`,`specie`,`punti_id`,`comp_id`) VALUES ('{$girone}','C',15,{$id_comp});";
  
if ($con->multi_query($sql) === TRUE) 
{
   $ritorno = ['girone' => $girone,'testo' => 'Posizionamenti nel girone'];
   echo json_encode(['data'=>$ritorno]);
}
else
{
   return http_response_code(400);
}
