<?php
/**
 * Returns the list of cars.
 */
require '../connect_local.php';
    
$cars = [];
$sql = "SELECT username, email, ruolo FROM utenti";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $cars[$cr]['username'] = $row['username'];
    $cars[$cr]['email'] = $row['email'];
    $cars[$cr]['ruolo'] = $row['ruolo'];
    $cr++;
  }
    
 echo json_encode(['data'=>$cars]);
}
else
{
  http_response_code(404);
}
