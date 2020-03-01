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
  $pass = mysqli_real_escape_string($con, trim($request->data->password)); 
  
  $subject = "Richiesta Iscrizione fantaeuropeo";

	$message = "
	<html>
	<head>
	<title>HTML email</title>
	</head>
	<body>
	<p>Richiesta Iscrizione fantaeuropeo!</p>
	<table>
	<tr>
	<th>Username</th>
	<th>Email</th>
	</tr>
	<tr>
	<td>".$username."</td>
	<td>".$email."</td>
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
  $sql = "INSERT INTO `utenti`(`username`,`email`,`ruolo`,`password`) VALUES ('{$username}','{$email}','{$ruolo}','{$pass}')";
  
  
  

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $car = [
      'username' => $username,
      'email' => $email,
      'ruolo' => $ruolo
    ];
    echo json_encode(['data'=>$car]);
	mail($emailTo,$subject,$message,$headers);
  }
  else
  {
    http_response_code(422);
  }
}

