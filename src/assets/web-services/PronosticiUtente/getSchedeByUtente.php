<?php

require '../connect_local.php';

$username = ($_GET['username'] !== null && $_GET['username'] !== '')? mysqli_real_escape_string($con, trim($_GET['username'])) : false;


if(!$username)
{
  return http_response_code(400);
}


$sql = "SELECT DISTINCT a.id_schedina, u.utente_id, DATE_FORMAT(u.tempo, '%d-%m-%Y %H:%i:%s') as tempo ";
$sql .="FROM _schedina a,_schedina_user u WHERE a.id_schedina = u.schedina_id and u.utente_id='{$username}' ";
$sql .="AND u.comp_id = {$id_comp} ORDER BY a.id_schedina";

if($result = mysqli_query($con,$sql))
{
  $item = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $elements[$item]['id_utente']   = $row['utente_id'];
    $elements[$item]['id_schedina'] = $row['id_schedina'];
    $elements[$item]['tempo'] 		= $row['tempo'];
    $item++;
  }
    
 echo json_encode(['data'=>$elements]);
}
else
{
  http_response_code(404);
}