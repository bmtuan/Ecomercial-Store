<?php
use MVC\Model;
class ModelsReview extends Model{
    public function get_all_review(){
        return $this->db->query('SELECT * from review');
    }
    public function insert($data){
        $stmt = $this->db->prepare('
        insert into review (`username`, `id_product`, `review`) values (?,?,?)
    ');
    return $stmt->execute(array_values($data));
    }
}