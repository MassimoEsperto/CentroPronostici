<?php

require '../connect_local.php';

// Extract, validate and sanitize the id.
$username = ($_GET['username'] !== null && $_GET['username'] !== '')? mysqli_real_escape_string($con, trim($_GET['username'])) : false;


if(!$username)
{
  return http_response_code(400);
}

// Delete.
 $sql = "SELECT DISTINCT a.id_schedina, u.id_utente, u.tempo FROM schedina a,schedina_user u WHERE a.id_schedina = u.id_schedina and id_utente='{$username}'";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $cars[$cr]['id_utente']    = $row['id_utente'];
    $cars[$cr]['id_schedina'] = $row['id_schedina'];
      $cars[$cr]['tempo'] = $row['tempo'];
    $cr++;
  }
    
 echo json_encode(['data'=>$cars]);
}
else
{
  http_response_code(404);
}