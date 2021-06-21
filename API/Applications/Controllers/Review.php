<?php

use MVC\Controller;
// use JWT\JWT;
require SYSTEM . 'JWT.php';
class ControllersReview extends Controller {
    private $_model;
    public function __construct(){
        Controller::__construct();
        $this->_model = $this->model('review');
    }
    public function get_all_review(){
        $products = $this->_model->get_all_review();
        if (isset($products)){
            $response = ['review'=>$products];
            $this->response->sendStatus(200);
            $this->response->setContent(['response'=> $response]);    
        }
        else{
            $response = ['review'=>array()];
            $this->response->sendStatus(200);
            $this->response->setContent(['response'=> $response]);     
        }

    }
    public function insert(){
        header('Content-type: application/json');
        $data = json_decode(file_get_contents('php://input'), true);
        if ($this->_model->insert($data)) {
            $this->response->sendStatus(200);
            $this->response->setContent(['response' => 'success']);
        } else {
            $response = 'Error insert review';
            $this->response->sendStatus(401);
            $this->response->setContent(['response' => $response]);
        }
    }

}