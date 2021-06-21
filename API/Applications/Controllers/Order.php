<?php

use MVC\Controller;
class ControllersOrder extends Controller {
    private $_model;
    public function __construct(){
        Controller::__construct();
        $this->_model = $this->model('order');
    }
    public function get_all_order(){
        $products = $this->_model->get_all_order();
        if (isset($products)){
            $response = ['order'=>$products];
            $this->response->sendStatus(200);
            $this->response->setContent(['response'=> $response]);    
        }
        else{
            $this->response->sendStatus(401);
            $this->response->setContent(['response'=> 'ERROR']);     
        }
    }
    public function insert_order()
    {
        header('Content-type: application/json');
        $data = json_decode(file_get_contents('php://input'), true);
        // var_dump($data);
        // die();
        if ($this->_model->create_order($data)) {
            $this->response->sendStatus(200);
            $this->response->setContent(['response' => 'success']);
        } else {
            $response = 'Error insert order';
            $this->response->sendStatus(401);
            $this->response->setContent(['response' => $response]);
        }
    }

}