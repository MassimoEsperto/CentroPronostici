<?php

require '../connect_local.php';
    
$elements = [];
$sql = "SELECT username, nome, cognome, email,cellulare, ruolo,versato, ";
  $sql .="	(SELECT count(DISTINCT fa.id_schedina) ";
  $sql .="	FROM _schedina fa ";
  $sql .="	LEFT JOIN _schedina_user fu";
  $sql .="	ON fa.id_schedina = fu.schedina_id  ";
  $sql .="	WHERE fu.utente_id = username  ";
  $sql .="	group by fu.utente_id) as schede ";
  $sql .="	FROM _utenti ";

if($result = mysqli_query($con,$sql))
{
  $item = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $elements[$item]['username'] = $row['username'];
    $elements[$item]['nome'] = $row['nome'];
    $elements[$item]['cognome'] = $row['cognome'];
    $elements[$item]['email'] = $row['email'];
    $elements[$item]['cellulare'] = $row['cellulare'];
    $elements[$item]['ruolo'] = $row['ruolo'];
    $elements[$item]['versato'] = $row['versato'];
    $elements[$item]['schede'] = $row['schede'];
    
    $item++;
  }
    
 echo json_encode(['data'=>$elements]);
}
else
{
  http_response_code(404);
}
