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
        /*movie_id: '748593',
        create_date: '2016-06-07',
        edited: '2016-08-06',
        conversation:*/
        if(!empty($conversation))
        {
            $sql = "INSERT INTO conversation (movie_id, create_date, edited, conversation)
            VALUES (:movie_id, :create_date, :edited, :conversation)";
            $stmt = $this->db->prepare($sql);
            return $stmt->execute(
                array(
                    ':movie_id' => $conversation->movie_id,
                    ':create_date' => $conversation->create_date,
                    ':edited' => $conversation->edited,
                    ':conversation' => $conversation->conversation
                ));
        }
        return 0;
    }
}
