<?php

use MVC\Model;

class ModelsUser extends Model
{
    public function find_username($username)
    {
        // echo '11231';
        $stmt = $this->db->prepare('
            SELECT * from user where username = ?
        ');
        $stmt->execute(array($username));
        return $stmt->fetchAll();
    }
    public function create_user($data)
    {
        $user = $this->find_username($data['username']);
        if (sizeof($user) != 0) return null;
        if (!isset($data['name'])) {
            $data['name'] = '';
        }
        if (!isset($data['email'])) {
            $data['email'] = '';
        }
        if (!isset($data['gender'])) {
            $data['gender'] = '';
        }
        if (!isset($data['address'])) {
            $data['address'] = '';
        }
        $stmt = $this->db->prepare('
            insert into user (`username`, `password`, `email`,`name`,`gender`,`address`) values (?,?,?,?,?,?)
        ');
        return $stmt->execute(array_values($data));
    }
}
