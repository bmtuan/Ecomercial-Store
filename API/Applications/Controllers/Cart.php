<?php

use MVC\Controller;
class ControllersCart extends Controller {
    private $_model;
    public function __construct(){
        Controller::__construct();
        $this->_model = $this->model('cart');
    }
    public function get_all_cart(){
        $products = $this->_model->get_all_cart();
        if (isset($products)){
            $response = ['cart'=>$products];
            $this->response->sendStatus(200);
            $this->response->setContent(['response'=> $response]);    
        }
        else{
            $response = ['cart'=>array()];
            $this->response->sendStatus(200);
            $this->response->setContent(['response'=> $response]);     
        }

    }
    public function deleteCart(){
        header('Content-type: application/json');
        $data = json_decode(file_get_contents('php://input'), true);
        if ($this->_model->deleteCart($data)){
            $this->response->sendStatus(200);
            $this->response->setContent(['response' => 'success']);
        }else {
            $response = 'Error delete wish';
            $this->response->sendStatus(401);
            $this->response->setContent(['response' => $response]);
        }
    }
    public function deleteAllCart(){
        header('Content-type: application/json');
        $data = json_decode(file_get_contents('php://input'), true);
        if ($this->_model->deleteAllCart($data)){
            $this->response->sendStatus(200);
            $this->response->setContent(['response' => 'success']);
        }else {
            $response = 'Error delete wish';
            $this->response->sendStatus(401);
            $this->response->setContent(['response' => $response]);
        }
    }
    public function insert_cart()
    {
        header('Content-type: application/json');
        $data = json_decode(file_get_contents('php://input'), true);
        if ($this->_model->create_cart($data)) {
            $this->response->sendStatus(200);
            $this->response->setContent(['response' => 'success']);
        } else {
            $response = 'Error insert wish';
            $this->response->sendStatus(401);
            $this->response->setContent(['response' => $response]);
        }
    }

}