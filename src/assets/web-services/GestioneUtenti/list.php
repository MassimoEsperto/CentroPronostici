<?php
/**
 * Returns the list of cars.
 */
require '../connect_local.php';
    
$cars = [];
$sql = "SELECT username, email,cellulare, ruolo,versato, ";
  $sql .="	(SELECT count(DISTINCT fa.id_schedina) ";
  $sql .="	FROM schedina fa ";
  $sql .="	LEFT JOIN schedina_user fu";
  $sql .="	ON fa.id_schedina = fu.id_schedina  ";
  $sql .="	WHERE fu.id_utente = username  ";
  $sql .="	group by fu.id_utente) as schede ";
  $sql .="	FROM utenti ";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $cars[$cr]['username'] = $row['username'];
    $cars[$cr]['email'] = $row['email'];
    $cars[$cr]['cellulare'] = $row['cellulare'];
    $cars[$cr]['ruolo'] = $row['ruolo'];
    $cars[$cr]['versato'] = $row['versato'];
    $cars[$cr]['schede'] = $row['schede'];
    
    $cr++;
  }
    
 echo json_encode(['data'=>$cars]);
}
else
{
  http_response_code(404);
}
