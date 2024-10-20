<?php
// Database connection settings
$servername = "localhost:3306";
$username = "root";
$password = "admin";
$database = "revizli";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
