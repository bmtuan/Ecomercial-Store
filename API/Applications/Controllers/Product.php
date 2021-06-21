<?php

use MVC\Controller;
use JWT\JWT;

require SYSTEM . 'JWT.php';
class ControllersProduct extends Controller
{
    private $_model;
    public function __construct()
    {
        Controller::__construct();
        $this->_model = $this->model('product');
    }
    public function get_all_products()
    {
        $products = $this->_model->get_all_products();
        if (isset($products)) {
            $response = ['product' => $products];
            $this->response->sendStatus(200);
            $this->response->setContent(['response' => $response]);
        } else {
            $response = ['product' => array()];
            $this->response->sendStatus(200);
            $this->response->setContent(['response' => $response]);
        }
    }
    public function find_product()
    {
        header('Content-type: application/json');
        $data = json_decode(file_get_contents('php://input'), true);
        // var_dump($data);
        $product = ($this->_model->find_product($data['id']));
        if (isset($product)) {
            $response = ['product' => $product];
            $this->response->sendStatus(200);
            $this->response->setContent(['response' => $response]);
        }
    }
}
