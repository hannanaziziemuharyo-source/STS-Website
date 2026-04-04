// Mengambil data dari localStorage atau membuat array kosong jika belum ada
let reports = JSON.parse(localStorage.getItem('wargaSpeakData')) || [];

// Fungsi untuk menyimpan ke localStorage
function simpanData() {
    localStorage.setItem('wargaSpeakData', JSON.stringify(reports));
}

// Bagian 3: Fungsi Menampilkan Data (Read)
function renderTable() {
    const tableBody = document.getElementById('tabelLaporan');
    tableBody.innerHTML = "";

    reports.forEach((report, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${report.id}</td>
                <td>${report.nama}</td>
                <td>${report.laporan}</td>
                <td><b>${report.status}</b></td>
                <td>${report.waktu}</td>
                <td>
                    <button class="btn-selesai" onclick="updateStatus(${index})">Selesai</button>
                    <button class="btn-hapus" onclick="deleteReport(${index})">Hapus</button>
                </td>
            </tr>
        `;
    });
}

// Bagian 2: Fungsi Warga Membuat Laporan (Create)
document.getElementById('btnKirim').addEventListener('click', function() {
    const namaInput = document.getElementById('namaPelapor').value;
    const isiInput = document.getElementById('isiLaporan').value;

    // Validasi: Cek apakah form kosong
    if (namaInput.trim() === "" || isiInput.trim() === "") {
        alert("Peringatan: Nama dan Isi Laporan wajib diisi!");
        return;
    }

    // Jika lengkap, buat laporan baru
    const newReport = {
        id: "RPT-" + Math.floor(Math.random() * 10000), // ID Acak
        nama: namaInput.toUpperCase(), // Ubah nama jadi huruf besar
        laporan: isiInput,
        status: "Diproses", // Status Default
        waktu: new Date().toLocaleString() // Catat waktu saat ini
    };

    // Masukkan ke array, simpan, lalu tampilkan
    reports.push(newReport);
    simpanData();
    renderTable();
    
    
    document.getElementById('namaPelapor').value = "";
    document.getElementById('isiLaporan').value = "";
    
    alert("Laporan berhasil dikirim!");
});


window.updateStatus = function(index) {
    if(reports[index].status === "Selesai ✅") {
        alert("Laporan ini sudah diselesaikan sebelumnya.");
        return;
    }
    
    reports[index].status = "Selesai ✅";
    simpanData();
    renderTable();
    alert("Status laporan diubah menjadi Selesai.");
};


window.deleteReport = function(index) {

    const yakin = confirm("Yakin mau hapus laporan ini?");
    
    if (yakin) {
        reports.splice(index, 1); 
        simpanData();
        renderTable();
    }
};

renderTable();