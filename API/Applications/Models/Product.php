<?php
use MVC\Model;
class ModelsProduct extends Model{
    public function get_all_products(){
        return $this->db->query('SELECT * from product');
    }
    public function find_product($id)
    {
        $stmt = $this->db->prepare('
            SELECT * from product where id = ?
        ');
        $stmt->execute(array($id));
        print_r($id);
        // print_r( $stmt->execute(array($id)));
        return $stmt->fetchAll();
    }
}