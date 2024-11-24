<?php
require 'conn.php';
// Fetch logged-in user data from the database
$userId = $_SESSION['id'];
$query = "SELECT username, email FROM tbluser WHERE user_id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("i", $userId);
$stmt->execute();
$stmt->bind_result($username, $email);
$stmt->fetch();
$stmt->close();?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($title) ? htmlspecialchars($title) : 'Retrofee'; ?></title>
    <!-- Styles -->
    <link rel="stylesheet" href="css/admin.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
</head>
<body>
    <nav id="navbar">
        <!-- Responsive menu toggle button -->
        <label onclick="myFunction()" for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <!-- Shopping cart button -->
        <a href="" class="btn-shop"><i class="fas fa-envelope"></i></a>
        <a href="product.php" class="btn-shop"><i class="fas fa-boxes"></i></a>
        <a href="admin.php" class="btn-shop"><i class="fas fa-chart-area"></i></a>
        <!-- Company logo -->

        <a href="#" class="title-admin">Admin</a>
        <img src="image/Retrofee-main-logo.svg" class="logo" alt="Logo">
        
        <ul class="ul-nav" id="ul-nav">
            <!-- Close button for responsive menu -->
            <label for="check" onclick="myFunction()" class="checkbtn escapebtn">
                <i class="fa fa-times"></i>
            </label>
            <!-- Navigation items -->
            <li><a class="mb-hide" href="admin.php" onclick="myFunction()">Dashboard</a></li>
            <li><a class="mb-hide" href="product.php" onclick="myFunction()">Products</a></li>
            <li><a class="mb-hide" href="users.php" onclick="myFunction()">Users</a></li>
            <li class="user-nav dropdown">
                <a href="#user" class="mb-hide"><i class="fa fa-user"></i></a>
                <div class="dropdown-content">
                    <a href="#"><?php echo htmlspecialchars($username); ?></a>
                    <a href="#"><?php echo htmlspecialchars($email); ?></a>
                    <a href="logout.php">Logout</a>
                </div>
            </li>
        </ul>
    </nav>

