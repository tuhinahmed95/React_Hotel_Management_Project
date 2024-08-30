<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "react_project";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: ". $conn->connect_error);
}

$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
$checkin = isset($_POST['checkin']) ? $_POST['checkin'] : '';
$checkout = isset($_POST['checkout']) ? $_POST['checkout'] : '';
$adults = isset($_POST['adults']) ? $_POST['adults'] : '';
$children = isset($_POST['children']) ? $_POST['children'] : '';
$room_no = isset($_POST['room_no']) ? $_POST['room_no'] : '';


if (empty($_POST['name']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) || empty($_POST['phone']) || $_POST['checkin'] == '0000-00-00' || $_POST['checkout'] == '0000-00-00' || $_POST['adults'] < 1) {
    die("Invalid input data");
}


$sql = "INSERT INTO bookings (name, email, phone, checkin, checkout, adults, children, room_no)
        VALUES ('$name', '$email', '$phone', '$checkin', '$checkout', '$adults', '$children', '$room_no')";

if ($conn->query($sql) === TRUE) {
    echo "Booking successful";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
