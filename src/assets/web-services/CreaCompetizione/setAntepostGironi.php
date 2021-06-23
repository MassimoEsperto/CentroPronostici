<?php
require '../connect_local.php';

$girone = ($_GET['girone'] !== null && $_GET['girone'] !== '')? mysqli_real_escape_string($con, trim($_GET['girone'])) : false;
 

if(!$girone)
{
  return http_response_code(400);
}


  $sql  = "INSERT INTO `_scommesse_antepost_gironi`(`girone`,`punti_id`) VALUES ('{$girone}',11);";
  $sql .= "INSERT INTO `_scommesse_antepost_gironi`(`girone`,`punti_id`) VALUES ('{$girone}',12);";
  $sql .= "INSERT INTO `_scommesse_antepost_gironi`(`girone`,`punti_id`) VALUES ('{$girone}',13);";
  $sql .= "INSERT INTO `_scommesse_antepost_gironi`(`girone`,`punti_id`) VALUES ('{$girone}',14);";
  
if ($con->multi_query($sql) === TRUE) 
{
   $ritorno = ['girone' => $girone,'testo' => 'Posizionamenti nel girone'];
   echo json_encode(['data'=>$ritorno]);
}
else
{
   return http_response_code(400);
}
