<?php

use MVC\Controller;
require SYSTEM . 'JWT.php';
class ControllersWish extends Controller {
    private $_model;
    public function __construct(){
        Controller::__construct();
        $this->_model = $this->model('wish');
    }
    public function get_all_wish(){
        $products = $this->_model->get_all_wish();
        if (isset($products)){
            $response = ['wish'=>$products];
            $this->response->sendStatus(200);
            $this->response->setContent(['response'=> $response]);    
        }
        else{
            $response = ['wish'=>array()];
            $this->response->sendStatus(200);
            $this->response->setContent(['response'=> $response]);     
        }
    }
    public function deleteWish(){
        header('Content-type: application/json');
        $data = json_decode(file_get_contents('php://input'), true);
        // var_dump($data);
        // die();
        if ($this->_model->deleteWish($data)){
            $this->response->sendStatus(200);
            $this->response->setContent(['response' => 'success']);
        }else {
            $response = 'Error delete wish';
            $this->response->sendStatus(401);
            $this->response->setContent(['response' => $response]);
        }
    }
    public function insert_wish()
    {
        header('Content-type: application/json');
        $data = json_decode(file_get_contents('php://input'), true);
        if ($this->_model->create_wish($data)) {
            $this->response->sendStatus(200);
            $this->response->setContent(['response' => 'success']);
        } else {
            $response = 'Error insert wish';
            $this->response->sendStatus(401);
            $this->response->setContent(['response' => $response]);
        }
    }

}