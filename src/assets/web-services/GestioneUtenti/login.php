<?php

require '../connect_local.php';

$user = $_GET['user'];($_GET['user'] !== null && $_GET['user'] !== '')? mysqli_real_escape_string($con, $_GET['user']) : false;
$pass = ($_GET['pass'] !== null && $_GET['pass'] !== '')? mysqli_real_escape_string($con, $_GET['pass']) : false;


 // Validate.
  if(trim($user) === '' || trim($pass) === '')
  {
      die('valori non prelevati'. mysqli_error($con));
  }

$sql = "select username,email,ruolo from _utenti  where password = '{$pass}' and username='{$user}'"; 

$result = mysqli_query( $con , $sql );

   
if(! $result ) {
        die('query failed'. mysqli_error($con));
}

if ($result->num_rows > 0) {
    $rows = array();
    while($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
	}

 echo json_encode(['data'=>$rows]);

} else {
	echo json_encode(['data'=>'negato']);
	
}

?>