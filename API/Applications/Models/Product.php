<?php
use MVC\Model;
class ModelsProduct extends Model{
    public function get_all_products(){
        return $this->db->query('SELECT * from product');
    }
}