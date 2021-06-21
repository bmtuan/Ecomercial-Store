<?php



$router->get('/', function(){
    echo "Welcome";
});
$router->get('/product','product@get_all_products');
$router->get('/find_product','product@find_product');
$router->get('/user', 'user@get_all_users');
$router->post('/login','user@validate_user');
$router->post('/register','user@register');
$router->get('/review','review@get_all_review');
$router->get('/cart','cart@get_all_cart');
$router->get('/wish','wish@get_all_wish');
$router->post('/add_wish','wish@insert_wish');
$router->post('/add_cart','cart@insert_cart');
$router->post('/delete_wish','wish@deleteWish');
$router->post('/delete_cart','cart@deleteCart');
$router->post('/delete_all_cart','cart@deleteAllCart');
$router->post('/insert','review@insert');
$router->get('/get_all_order','order@get_all_order');
$router->post('/insert_order','order@insert_order');