<?php
use MVC\Model;
class ModelsUser extends Model{
    public function find_username($username)
    {

        $stmt = $this->db->prepare('
            SELECT * from user where username = ?
        ');
        $stmt->execute(array($username));
        
        return $stmt->fetchAll();
        
    }
    public function get_all_users(){
        return $this->db->query('SELECT * from user');
    }
    public function create_user($data)
    {
        $stmt = $this->db->prepare('
            insert into user (`username`, `password`, `firstname`, `lastname`, `email`,`birthdate`,`gender`,`address`) values (?,?,?,?,?,?,?)
        ');
        $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT);
        $stmt->execute(array_values($data));
        return $stmt->fetchAll();
    }
}