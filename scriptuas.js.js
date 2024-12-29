// Add Transaction Function
function tambahTransaksi() {
    const nama = document.getElementById('nama').value;
    const jumlah = document.getElementById('jumlah').value;
    const kategori = document.getElementById('kategori').value;

    if (nama && jumlah && kategori) {
        const tabelBody = document.querySelector('#tabelTransaksi tbody');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${nama}</td>
            <td>${jumlah}</td>
            <td>${kategori}</td>
        `;

        tabelBody.appendChild(row);

        // Clear inputs after submission
        document.getElementById('transaksiForm').reset();
    } else {
        alert('Harap isi semua field sebelum menambah transaksi!');
    }
}
