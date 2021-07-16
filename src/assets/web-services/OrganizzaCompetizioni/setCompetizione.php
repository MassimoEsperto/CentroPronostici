<?php
require '../connect_local.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	
  $sigla = mysqli_real_escape_string($con, trim($request->data->sigla));
  $descrizione = mysqli_real_escape_string($con, trim($request->data->descrizione));

  $sql = "INSERT INTO `_competizioni`(`sigla`,`descrizione`) VALUES ('{$sigla}','{$descrizione}')";
  $sql2 = "";
  
  if(mysqli_query($con,$sql))
  {
  	$last_id = mysqli_insert_id($con);
    $sql2 .="INSERT INTO `_opzioni`(`comp_id`) VALUES ({$last_id})";
  }
  else
  {
    http_response_code(420);
  }
  
   if(mysqli_query($con,$sql2))
  {
    http_response_code(201);
    $obj = [
	  'sigla' => $sigla
    ];
    echo json_encode(['data'=>$obj]);
  }
  else
  {
    http_response_code(422);
  }
}