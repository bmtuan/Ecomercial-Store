<?php

use MVC\Controller;
use JWT\JWT;
require SYSTEM . 'JWT.php';
class ControllersProduct extends Controller {
    private $_model;
    public function __construct(){
        Controller::__construct();
        $this->_model = $this->model('product');
    }
    public function get_all_products(){
        $products = $this->_model->get_all_products();
        if (isset($products)){
            $response = ['product'=>$products];
            $this->response->sendStatus(200);
            $this->response->setContent(['response'=> $response]);    
        }
        else{
            $response = ['product'=>array()];
            $this->response->sendStatus(200);
            $this->response->setContent(['response'=> $response]);     
        }

    }

}