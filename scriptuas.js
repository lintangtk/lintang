// JavaScript untuk halaman Simpan Pinjam Dendelion

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    // Fungsi untuk berpindah ke slide berikutnya
    function nextSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    // Tambahkan kelas "active" ke slide pertama saat halaman dimuat
    slides[currentSlide].classList.add("active");

    // Ubah slide setiap 5 detik
    setInterval(nextSlide, 5000);

    // Tambahan interaktivitas jika diperlukan
    console.log("Halaman Simpan Pinjam Dendelion siap digunakan!");
});
