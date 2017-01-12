<?php

class dbConnetion
{
    function __construct() {
    }

    public function DBConnection(
        $host   = '127.0.0.1',
        $port   = '3306',
        $db     = 'geoblockdb',
        $user   = 'root',
        $pass   = 'root'

    ) {
        $dsn = "mysql:host=$host:$port;dbname=$db;charset=utf8";
        $opt = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];
        $db = new PDO($dsn, $user, $pass, $opt);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $db;
    }
}
