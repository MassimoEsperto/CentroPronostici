<?php

require '../connect_local.php';

$user = $_GET['user'];($_GET['user'] !== null && $_GET['user'] !== '')? mysqli_real_escape_string($con, $_GET['user']) : false;
$email = ($_GET['email'] !== null && $_GET['email'] !== '')? mysqli_real_escape_string($con, $_GET['email']) : false;
$pass='';

 // Validate.
  if(trim($user) === '' || trim($email) === '')
  {
      die('valori non prelevati'. mysqli_error($con));
  }
  
  
   $subject = "Richiesta Password fantaeuropeo";

	// Always set content-type when sending HTML email
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	// More headers
	$headers .= 'From: <pronostici@fantaeuropeo.com>' . "\r\n";



$sql = "select password from utenti where email = '{$email}' and username='{$user}' LIMIT 1"; 

$result = mysqli_query( $con , $sql );

if(!$result) {
        die('query failed'. mysqli_error($con));
}
else
{
  
  while($row = mysqli_fetch_assoc($result))
  {
    $pass = $row['password'];
  }
    $message = "
	<html>
	<head>
	<title>HTML email</title>
	</head>
	<body>
	<p>Richiesta password dimenticata!</p>
	<table>
	<tr>
	<th>La tua password</th>
	</tr>
	<tr>
	<td>".$pass."</td>
	</tr>
	</table>
    <br>
    <a href='http://marescafantaeuropeo.altervista.org/pronostici2021/'>Visit Marescafantaeuropeo.com!</a>
	</body>
	</html>
	";
    if($pass!=''){
		mail($email,$subject,$message,$headers);
    }else{
    	http_response_code(422);
    }
}