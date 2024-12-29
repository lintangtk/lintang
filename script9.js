// Tangani login
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Ambil nomor telepon
    const phoneNumber = document.getElementById('phone-number').value;

    // Validasi nomor telepon
    if (phoneNumber.length === 0 || !phoneNumber.match(/^08[0-9]{8,}$/)) {
        alert("Nomor telepon tidak valid. Masukkan nomor yang benar.");
    } else {
        // Arahkan ke dashboard.html
        window.location.href = "dsbrd.html";
    }
});

// Tangani logout (untuk dashboard)
function logout() {
    window.location.href = "index.html";
}
