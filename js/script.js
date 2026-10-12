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

    // Ambil nilai dari input form
    const nama = document.getElementById("nama").value.trim();
    const nim = document.getElementById("nim").value.trim();
    const prodi = document.getElementById("prodi").value.trim();
    const pilihanUKM = document.getElementById("pilihan-ukm").value;
    const pengalaman = document.getElementById("pengalaman").value;
    const alasan = document.getElementById("alasan").value.trim();
    const pesan = document.getElementById("pesan-pendaftaran");

    // Validasi sederhana: pastikan semua field terisi
    if (!nama || !nim || !prodi || !pilihanUKM || !pengalaman || !alasan) {
      pesan.className = "pesan-box gagal";
      pesan.textContent = "Mohon lengkapi semua data dalam formulir pendaftaran!";
      return;
    }

    // Tampilkan pesan sukses dan ubah tampilan style kotak pesan
    pesan.className = "pesan-box sukses";
    pesan.textContent = "Terima kasih, " + nama + "! Pilihan minatmu adalah " + pilihanUKM + ". Formulir simulasi berhasil diproses.";

    // Reset isi form setelah berhasil
    formPendaftaran.reset();
  });

  // Hapus/sembunyikan pesan saat tombol reset diklik
  formPendaftaran.addEventListener("reset", function () {
    const pesan = document.getElementById("pesan-pendaftaran");
    if (pesan) {
      pesan.className = "pesan-box";
      pesan.textContent = "";
    }
  });
}