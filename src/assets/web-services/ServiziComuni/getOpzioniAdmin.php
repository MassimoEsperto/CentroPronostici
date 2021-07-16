<?php

require '../connect_local.php';


$sql = "SELECT o.isOpen,o.scadenza,o.footer,c.sigla FROM _opzioni o,_competizioni c ";
$sql .="WHERE o.comp_id = {$id_comp} AND o.comp_id=c.id_comp LIMIT 1 ";

$ritorno=false;

$result = mysqli_query( $con , $sql );

   
if(! $result ) {
        die('query failed'. mysqli_error($con));
}

if ($result->num_rows > 0) {
    while($row = mysqli_fetch_assoc($result)) {
    if($row['isOpen']==1)
    {
    	$ritorno['isOpen']=true;
    }else{
    	$ritorno['isOpen']=false;
    }
       $ritorno['scadenza']=$row['scadenza'];
       $ritorno['footer']=$row['footer'];
       $ritorno['sigla']=$row['sigla'];
       
	}

 echo json_encode(['data'=>$ritorno]);

} else {
	  http_response_code(404);
	
}