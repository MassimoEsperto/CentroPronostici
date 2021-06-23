<?php

require '../connect_local.php';
    
$sql = "SELECT `open` FROM `variabile` LIMIT 1";
$ritorno=false;
$result = mysqli_query( $con , $sql );

   
if(! $result ) {
        die('query failed'. mysqli_error($con));
}

if ($result->num_rows > 0) {
    while($r = mysqli_fetch_assoc($result)) {
    if($r['open']==1)
    {
    	$ritorno=true;
    }
       
	}

 echo json_encode(['data'=>$ritorno]);

} else {
	  http_response_code(404);
	
}