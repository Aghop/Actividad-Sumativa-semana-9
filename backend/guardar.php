<?php
//Escribir los datos en el json
header('Content-type: application/json');
header('Access-Control-Allow-Origin:*');

$data=file_get_contents('php://input');

$json=json_decode($data);

$json = json_encode($json);

file_put_contents('notas.JSON', $json);

?>