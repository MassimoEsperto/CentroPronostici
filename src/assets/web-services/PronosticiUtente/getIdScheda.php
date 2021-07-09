<?php

require '../connect_local.php';

// Extract, validate and sanitize the id.
$username = ($_GET['username'] !== null && $_GET['username'] !== '')? mysqli_real_escape_string($con, trim($_GET['username'])) : false;
$descrizione = ($_GET['descrizione'] !== null && $_GET['descrizione'] !== '')? mysqli_real_escape_string($con, trim($_GET['descrizione'])) : false;


if(!$username)
{
  return http_response_code(400);
}

// Delete.
 $sql = "INSERT INTO `_schedina_user`(`utente_id`,`descrizione`) VALUES ('{$username}','{$descrizione}')";

if(mysqli_query($con, $sql))
{
  $last_id = mysqli_insert_id($con);
    $ritorno = [
      'username' => $username,
      'id_schedina' => $last_id
    ];
    echo json_encode(['data'=>$ritorno]);
}
else
{
  return http_response_code(422);
}
