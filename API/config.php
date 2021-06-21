<?php

/**
 *  Config File For Handel Route, Database And Request
 * 
 *  Author: Mohammad Rahmani
 *  Email: rto1680@gmail.com
 *  WebPage: afgprogrammer.com
 *  
 */


// Define Path Application
define('SCRIPT', str_replace('\\', '/', rtrim(__DIR__, '/')) . '/');
define('SYSTEM', SCRIPT . 'System/');
define('CONTROLLERS', SCRIPT . 'Applications/Controllers/');
define('MODELS', SCRIPT . 'Applications/Models/');
define('UPLOAD', SCRIPT . 'Upload/');
define('HOST_URL', 'http://localhost/EcomercialStore/API');

// Config Database
define('DATABASE', [
    'Port'   => '3306',
    'Host'   => 'localhost',
    'Driver' => 'PDO',
    'Name'   => 'project2',
    'User'   => 'root',
    'Pass'   => '',
    'Prefix' => 'sm_'
]);

define('SECRET_KEY', 'secret');
// DB_PREFIX
define('DB_PREFIX', 'sm_');