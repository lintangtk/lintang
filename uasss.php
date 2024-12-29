<?php
include 'db.php';

$sql = "SELECT * FROM transaksi ORDER BY tanggal DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row["id"] . "</td>
                <td>" . $row["nama"] . "</td>
                <td>" . $row["tipe"] . "</td>
                <td>" . $row["jumlah"] . "</td>
                <td>" . $row["tanggal"] . "</td>
              </tr>";
    }
} else {
    echo "<tr><td colspan='5'>Tidak ada transaksi.</td></tr>";
}

$conn->close();
?>
