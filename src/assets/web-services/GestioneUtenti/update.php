<?php
require '../connect_local.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	

  // Validate.
  if(trim($request->data->username) === '' || trim($request->data->ruolo)=== '' )
  {
    return http_response_code(400);
  }
	
  // Sanitize.
  $username = mysqli_real_escape_string($con, trim($request->data->username));
  $email = mysqli_real_escape_string($con, trim($request->data->email)); 
  $ruolo = mysqli_real_escape_string($con, trim($request->data->ruolo)); 
  
   $subject = "Modifica account";

	$message = "
	<html>
	<head>
	<title>HTML email</title>
	</head>
	<body>
	<p>Account fantaeuropeo aggiornato!</p>
	<table>
	<tr>
	<th>Username</th>
	<th>Email</th>
	<th>Ruolo</th>
	</tr>
	<tr>
	<td>".$username."</td>
	<td>".$email."</td>
	<td>".$ruolo."</td>
	</tr>
	</table>
    <br>
    <a href='http://marescafantaeuropeo.altervista.org/'>Visit Marescafantaeuropeo.com!</a>
	</body>
	</html>
	</body>
	</html>
	";

	// Always set content-type when sending HTML email
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	// More headers
	$headers .= 'From: <pronostici@fantaeuropeo.com>' . "\r\n";

   // Update.
  $sql = "UPDATE `utenti` SET `email`='{$email}',`ruolo`='{$ruolo}' WHERE `username` = '{$username}' LIMIT 1";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $car = [
      'username' => $username,
      'email' => $email,
      'ruolo' => $ruolo
    ];
    echo json_encode(['data'=>$car]);
	mail($email,$subject,$message,$headers);
  }
  else
  {
    http_response_code(422);
  }
}