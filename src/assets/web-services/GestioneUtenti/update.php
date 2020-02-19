<?php
require '../connect_local.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	

  // Validate.
  if(trim($request->data->username) === '' || (int)$request->data->ruolo < 1)
  {
    return http_response_code(400);
  }
	
  // Sanitize.
  $username = mysqli_real_escape_string($con, trim($request->data->username));
  $email = mysqli_real_escape_string($con, trim($request->data->email)); 
  $ruolo = mysqli_real_escape_string($con, (int)$request->data->ruolo);

   // Update.
  $sql = "UPDATE `utenti` SET `email`='{$email}',`ruolo`={$ruolo} WHERE `username` = '{$username}' LIMIT 1";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $car = [
      'username' => $username,
      'email' => $email,
      'ruolo' => $ruolo
    ];
    echo json_encode(['data'=>$car]);
  }
  else
  {
    http_response_code(422);
  }
}