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
  $versato = mysqli_real_escape_string($con, (int)$request->data->versato);
  $cellulare = mysqli_real_escape_string($con, trim($request->data->cellulare)); 
  
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
    <th>Cellulare</th>
	<th>Ruolo</th>
    <th>Versato</th>
	</tr>
	<tr>
	<td>".$username."</td>
	<td>".$email."</td>
    <td>".$cellulare."</td>
	<td>".$ruolo."</td>
    <td>".$versato."</td>
  
	</tr>
	</table>
    <br>
    <a href='http://marescafantaeuropeo.altervista.org/pronostici2021/'>Visit Marescafantaeuropeo.com!</a>
    <br>
    <a href='https://chat.whatsapp.com/GMZ7WGfE1yo9hpxiyoeUq5'>Gruppo WhatsApp</a>
    <br>
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
  $sql = "UPDATE `utenti` SET `email`='{$email}',`cellulare`='{$cellulare}',`ruolo`='{$ruolo}',`versato`={$versato} WHERE `username` = '{$username}' LIMIT 1";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $car = [
      'username' => $username,
      'email' => $email,
      'cellulare' => $cellulare,
      'ruolo' => $ruolo,
      'versato' => $versato
    ];
    echo json_encode(['data'=>$car]);
	mail($email,$subject,$message,$headers);
  }
  else
  {
    http_response_code(422);
  }
}