<?php

require '../connect_local.php';


$schede = [];
$scheda = [];
$singola = [];
$attualeUtente = '';
$attualeScheda = '';

$sql ="SELECT id_utente,id_schedina,risultato,scommessa ";
$sql .="FROM ";
$sql .="(SELECT su.id_utente,s.id_schedina,s.id_partita,s.risultato,sa.scommessa ";
$sql .="FROM schedina s,schedina_user su,scommesse_antepost sa,calendario c ";
$sql .="WHERE s.id_schedina=su.id_schedina ";
$sql .="AND s.id_partita = sa.id_partita  ";

$sql .="union ";

$sql .="SELECT su.id_utente,s.id_schedina,s.id_partita,s.risultato,c.partita as scommessa ";
$sql .="FROM schedina s,schedina_user su,calendario c ";
$sql .="WHERE s.id_schedina=su.id_schedina ";
$sql .="AND s.id_partita = c.id_partita ";
$sql .=") scheda ";
$sql .="ORDER BY scheda.id_utente,scheda.id_schedina ASC,scheda.id_partita ";


if($result = mysqli_query($con,$sql))
{
  $num_s = 0;
  $num_t = 0;
  while($row = mysqli_fetch_assoc($result))
  {
  if($attualeUtente!=$row['id_utente']){
	
	if($attualeUtente!=''){
	$singola[$num_s]['scheda'] 		= $attualeScheda;
			$singola[$num_s]['lista'] 		= $scheda;
		$schede[$num_t]['utente'] 		= $attualeUtente;
		$schede[$num_t]['lista'] 		= $singola;
		$num_t++;
		$singola=[];
		$attualeScheda='';
		
	}
	$num_s=0;
	$attualeUtente=$row['id_utente'];
	
	 if($attualeScheda!=$row['id_schedina']){
		$num_l=0;
		if($attualeScheda!=''){
			$singola[$num_s]['scheda'] 		= $attualeScheda;
			$singola[$num_s]['lista'] 		= $scheda;
			$num_s++;
			$scheda=[];
		}
		$attualeScheda=$row['id_schedina'];
		
		$scheda[$num_l]['scommessa'] 	= $row['scommessa'];
		$scheda[$num_l]['risultato'] 	= $row['risultato'];
		$num_l++;
  }else{
   
		$scheda[$num_l]['scommessa'] 	= $row['scommessa'];
		$scheda[$num_l]['risultato'] 	= $row['risultato'];
		$num_l++;
  }
  }else{
		 if($attualeScheda!=$row['id_schedina']){
		$num_l=0;
		if($attualeScheda!=''){
			$singola[$num_s]['scheda'] 		= $attualeScheda;
			$singola[$num_s]['lista'] 		= $scheda;
			$num_s++;
			$scheda=[];
		}
		$attualeScheda=$row['id_schedina'];
		
		$scheda[$num_l]['scommessa'] 	= $row['scommessa'];
		$scheda[$num_l]['risultato'] 	= $row['risultato'];
		$num_l++;
		
		}else{
	   
			$scheda[$num_l]['scommessa'] 	= $row['scommessa'];
			$scheda[$num_l]['risultato'] 	= $row['risultato'];
			$num_l++;
	  }
  }
    
  }
    
 echo json_encode(['data'=>$schede]);
}
else
{
  http_response_code(404);
}



