<?php
use MVC\Model;
class ModelsCart extends Model{
    public function get_all_cart(){
        return $this->db->query('SELECT * from cart');
    }
    public function deleteCart($id)
    {
        $stmt = $this->db->prepare('
        delete from `cart` where id = ?
    ');
        return $stmt->execute(array_values($id));
    }
    public function deleteAllCart($data){
        $stmt = $this->db->prepare('delete from cart where username = ?');
        return $stmt->execute(array_values($data));
    }
    public function create_cart($data)
    {
        $stmt = $this->db->prepare('
            insert into cart (`username`, `id_product`) values (?,?)
        ');
        return $stmt->execute(array_values($data));
    }

}