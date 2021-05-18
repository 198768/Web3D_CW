<?php
require './application/view/load.php';
require './application/model/model.php';
require './application/controller/controller.php';
$pageURI = $_SERVER['REQUEST_URI'];
$pageURI = substr($pageURI,strrpos($pageURI,'index.php')+10);
    if (!$pageURI)
        new Controller('home');
    else
        new Controller($pageURI);
?>