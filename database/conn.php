<?php

$hostname = 'localhost';
$dbName = 'to_do_list';
$userName = 'postgres';
$password = '111111';

try {
    $pdo = new PDO("pgsql:host=$hostname;dbname=$dbName", $userName, $password);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}