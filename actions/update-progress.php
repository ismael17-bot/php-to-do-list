<?php

require_once '../database/conn.php';

$completed = filter_input(INPUT_POST, 'completed');
$id = filter_input(INPUT_POST, 'id');


if ($completed && $id) {
  $sql = $pdo->prepare("UPDATE task set completed = :completed WHERE id = :id");
  $sql->bindValue(':completed', $completed);
  $sql->bindValue(':id', $id);
  $sql->execute();

  echo json_encode(['success' => true]);
  exit();
} else {
  echo json_encode(['success' => false]);
  exit();
}