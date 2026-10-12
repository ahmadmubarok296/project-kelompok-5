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

// ===== BAGIAN MAHASISWA 4: (PENDAFTARAN) =====
const formPendaftaran = document.getElementById("form-pendaftaran");

if (formPendaftaran) {
  formPendaftaran.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const pilihanUKM = document.getElementById("pilihan-ukm").value;
    const pesan = document.getElementById("pesan-pendaftaran");

    pesan.textContent = "Terima kasih, " + nama + "! Pilihan minatmu adalah " + pilihanUKM + ". Formulir simulasi berhasil diproses.";

    formPendaftaran.reset();
  });
}