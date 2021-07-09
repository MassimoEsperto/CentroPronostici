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
  $nome = mysqli_real_escape_string($con, trim($request->data->nome)); 
  $cognome = mysqli_real_escape_string($con, trim($request->data->cognome)); 
  $email = mysqli_real_escape_string($con, trim($request->data->email)); 
  $ruolo = mysqli_real_escape_string($con, trim($request->data->ruolo)); 
  $pass = mysqli_real_escape_string($con, trim($request->data->password)); 
  $cellulare = mysqli_real_escape_string($con, trim($request->data->cellulare)); 
 
  
  $subject = "Richiesta Iscrizione fantaeuropeo";

	$message = "
	<html>
	<head>
	<title>HTML email</title>
	</head>
	<body>
	<p>Richiesta Iscrizione fantaeuropeo!</p>
    <a href='https://chat.whatsapp.com/GMZ7WGfE1yo9hpxiyoeUq5'>Gruppo WhatsApp</a>
	<table>
	<tr>
	<th>Username</th>
	<th>Email</th>
    <th>Cellulare</th>
	</tr>
	<tr>
	<td>".$username."</td>
	<td>".$email."</td>
    <td>".$cellulare."</td>
	</tr>
	</table>
	</body>
	</html>
	";

	// Always set content-type when sending HTML email
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	// More headers
	$headers .= 'From: <pronostici@fantaeuropeo.com>' . "\r\n";
  
  	$emailTo="fantamondiale2014andreamaresca@gmail.com";
  
	


  // Store.
  $sql = "INSERT INTO `_utenti`(`username`,`nome`,`cognome`,`email`,`cellulare`,`ruolo`,`password`) VALUES ('{$username}','{$nome}','{$cognome}','{$email}','{$cellulare}','{$ruolo}','{$pass}')";
  
  
  

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $item = [
      'username' => $username,
      'email' => $email,
      'cellulare' => $cellulare
    ];
    echo json_encode(['data'=>$item]);
	mail($emailTo,$subject,$message,$headers);
  }
  else
  {
    http_response_code(422);
  }
}

