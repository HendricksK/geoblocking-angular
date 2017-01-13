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
        $results = $stmt->fetchAll();
        if(!empty($results))
        {
            return $results;
        }
        return 0;
    }

    public function getConversation($id)
    {
        if(!empty($id))
        {
            $sql = "SELECT * FROM conversation WHERE id = :id";
            $stmt = $this->db->prepare($sql);
            $stmt->execute(array(':id' => $id));
            return $stmt->fetchAll();
        }
        return 0;
    }

    public function saveConversation($conversation)
    {
        if(!empty($id))
        {
            $sql = "SELECT * FROM conversation WHERE id = :id";
            $stmt = $this->db->prepare($sql);
            $stmt->execute(array(':id' => $id));
            return $stmt->fetchAll();
        }
        return 0;
    }
}
