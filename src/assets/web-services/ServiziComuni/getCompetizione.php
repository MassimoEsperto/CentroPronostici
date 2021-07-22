<?php

require '../connect_local.php';


$sql = "SELECT id_comp,sigla,descrizione,isAttiva,scadenza,footer,isOpen FROM _competizioni ";
$sql .="WHERE id_comp = {$id_comp} LIMIT 1 ";

$ritorno=false;

$result = mysqli_query( $con , $sql );

   
if(! $result ) {
        die('query failed'. mysqli_error($con));
}

if ($result->num_rows > 0) {
    while($row = mysqli_fetch_assoc($result)) {
   
   	   $ritorno['sigla']=$row['sigla'];
       $ritorno['id_comp']=$row['id_comp'];
       $ritorno['descrizione']=$row['descrizione'];
       $ritorno['isAttiva']=$row['isAttiva']=="1";
       $ritorno['scadenza']=$row['scadenza'];
       $ritorno['footer']=$row['footer'];
       $ritorno['isOpen']=$row['isOpen']=="1";
       
	}

 echo json_encode(['data'=>$ritorno]);

} else {
	  http_response_code(404);
	
}