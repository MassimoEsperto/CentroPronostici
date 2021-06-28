<?php

require '../connect_local.php';
    
$sql = "SELECT `open`,`scadenza`,`testo` FROM `_opzioni` LIMIT 1";
$ritorno=false;
$result = mysqli_query( $con , $sql );

   
if(! $result ) {
        die('query failed'. mysqli_error($con));
}

if ($result->num_rows > 0) {
    while($row = mysqli_fetch_assoc($result)) {
    if($row['open']==1)
    {
    	$ritorno['valore']=true;
    }else{
    	$ritorno['valore']=false;
    }
       $ritorno['scadenza']=$row['scadenza'];
       $ritorno['testo']=$row['testo'];
	}

 echo json_encode(['data'=>$ritorno]);

} else {
	  http_response_code(404);
	
}