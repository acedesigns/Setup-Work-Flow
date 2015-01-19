<?php

require_once getcwd().'/php/includes/constance.php';

Class Database {

	private $conn;

/////////////////////////////////////////////////////////////////////////////////////////////////
	function __construct() {
		try {
			$this->conn = new PDO("mysql:host=".DB_SERVER.";dbname=".DB_NAME, DB_USER, DB_PASS);
			$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		} catch(PDOException $error) {
			echo 'Connection failed: ' . $error->getMessage();
		}
	}

////////////////////////////////////////////////////////////////////////////////////////////////
    function insertUser($name, $surname, $phone, $location) {

		$query = "INSERT INTO `loginsystem`.`users` VALUES (NULL, '$name', '$surname', '$phone', '$location');";

		$stmt = $this->conn->prepare( $query );
		$stmt->execute();
	}

////////////////////////////////////////////////////////////////////////////////////////////////


}


// Instantiate the class
$database = new Database();