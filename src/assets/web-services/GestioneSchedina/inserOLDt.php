<?php
require '../connect_local.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	

  // Validate.
  if(trim($request->data->username) === '')
  {
    return http_response_code(400);
  }
	
  // Sanitize.
  $username = mysqli_real_escape_string($con, trim($request->data->username));

  // Store.
  $sql = "INSERT INTO `schedina_user`(`id_utente`) VALUES ('{$username}')";

  if(mysqli_query($con,$sql))
  {
    $last_id = mysqli_insert_id($con);
    $car = [
      'username' => $username,
      'id_schedina' => $last_id
    ];
    echo json_encode(['data'=>$car]);
  }
  else
  {
    http_response_code(422);
  }
}