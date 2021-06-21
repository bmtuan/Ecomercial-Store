<?php

use MVC\Model;

class ModelsWish extends Model
{
    public function get_all_wish()
    {
        return $this->db->query('SELECT * from wish');
    }
    public function deleteWish($id)
    {
        $stmt = $this->db->prepare('
        delete from `wish` where id = ?
    ');
        return $stmt->execute(array_values($id));
    }   
    public function create_wish($data)
    {
        $stmt = $this->db->prepare('
            insert into wish (`username`, `id_product`) values (?,?)
        ');
        return $stmt->execute(array_values($data));
    }
}
