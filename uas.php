<?php
$servername = "localhost";
$username = "simpan_pinjam"; // Ganti dengan username database Anda
$password = "123"; // Ganti dengan password database Anda
$dbname = "simpanpinjam";

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Mengecek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>
