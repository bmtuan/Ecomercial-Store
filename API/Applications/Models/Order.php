<?php

use MVC\Model;

class ModelsOrder extends Model
{
    public function get_all_order()
    {
        return $this->db->query('SELECT * from `order`');
    }  
    public function create_order($data)
    {
        $stmt = $this->db->prepare('
            insert into `order` (`time`, `status`,`total`,`username`) values (?,?,?,?)
        ');
        return $stmt->execute(array_values($data));
    }
}
