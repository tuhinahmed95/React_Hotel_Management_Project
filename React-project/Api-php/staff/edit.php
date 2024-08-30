<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root"; 
$password = "";
$dbname = "react_project";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id'];
$name = $data['name'];
$email = $data['email'];
$phone = $data['phone'];
$address = $data['address'];
$position = $data['position'];
$department = $data['department'];
$salary = $data['salary'];

$sql = "UPDATE staffs SET name='$name', email='$email', phone='$phone', address='$address', position='$position', department='$department', salary='$salary' WHERE id=$id";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Record updated successfully"]);
} else {
    echo json_encode(["message" => "Error updating record: " . $conn->error]);
}

$conn->close();
?>
