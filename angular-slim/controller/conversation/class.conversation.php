<?php

require_once __DIR__ . '../../class.dbconnection.php';

class conversation extends dbConnetion
{
    protected $db;
    
    function __construct()
    {
        $this->db = $this->DBConnection();
        parent::__construct();
    }
    public function getConversations()
    {
        // if(!empty($id))
        // {
        //     $sql = "SELECT * FROM conversation WHERE id = :id";
        //     $stmt = $this->db->prepare($sql);
        //     $stmt->execute(array(':id' => $id));
        //     return $stmt->fetchAll();
        // }
        // return 0;
        $sql = "SELECT * FROM conversation";
        $stmt = $this->db->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll();
    }
    // public function saveTestData($name)
    // {
    //     if(!empty($name))
    //     {
    //       $sql = "INSERT INTO crm_microservice (name) VALUES (:name)";
    //       $stmt = $this->db->prepare($sql);
    //       return $stmt->execute(array(':name' => $name));
    //     }
    //     return 0;
    // }
    // public function updateTestData($id, $name)
    // {
    //     if(!empty($id) && !empty($name))
    //     {
    //         $sql = "UPDATE crm_microservice SET name = :name WHERE id = :id";
    //         $stmt = $this->db->prepare($sql);
    //         return $stmt->execute(
    //             array(
    //                 ':id' => $id,
    //                 ':name' => $name
    //             )
    //         );
    //     }
    //     return 0;
    // }
    // public function deleteTestData($id, $name)
    // {
    //     if(!empty($id))
    //     {
    //         $sql = "DELETE FROM crm_microservice WHERE id = :id";
    //         $stmt = $this->db->prepare($sql);
    //         return $stmt->execute(array(':id' => $id));
    //     }
    //     return 0;
    // }
}
