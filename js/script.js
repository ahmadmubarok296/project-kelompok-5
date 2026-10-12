// ===== BAGIAN UMUM:  mode gelap untuk semua halaman =====
const tombolTema = document.getElementById("tombol-tema");

if (tombolTema) {
  tombolTema.addEventListener("click", function () {
    document.body.classList.toggle("gelap");

    if (document.body.classList.contains("gelap")) {
      tombolTema.textContent = "Mode Terang";
    } else {
      tombolTema.textContent = "Mode Gelap";
    }
  });
}

// ===== BAGIAN MAHASISWA 2 (PROFIl) =====


// ===== BAGIAN MAHASISWA 3 (KEGIATAN) =====
const formulir = document.getElementById("formulir");

if (formulir) {
  formulir.addEventListener("click", function () {
    alert("Tertarik bergabung? Cepat daftarkan dirimu!");
  });
}
// ===== BAGIAN MAHASISWA 4: (PENDAFTARAN) =====