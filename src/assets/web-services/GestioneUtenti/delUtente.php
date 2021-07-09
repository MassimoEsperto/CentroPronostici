<?php

require '../connect_local.php';

// Extract, validate and sanitize the id.
$username = ($_GET['username'] !== null && $_GET['username'] !== '')? mysqli_real_escape_string($con, trim($_GET['username'])) : false;


if(!$username)
{
  return http_response_code(400);
}

// Delete.
$sql = "DELETE FROM `_utenti` WHERE `username` ='{$username}' LIMIT 1";

if(mysqli_query($con, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}
