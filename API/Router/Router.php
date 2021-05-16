<?php



$router->get('/', function(){
    echo "Welcome";
});
$router->get('/product','product@get_all_products');
$router->get('/user', 'user@get_all_users');
$router->post('/login','user@validate_user');
$router->post('/register','user@register');