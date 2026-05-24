var app = new Vue ({
  el: '#app',
  data: {
      upbjjList: ["Jakarta", "Surabaya", "Makassar", "Padang", "Denpasar", "Bogor],
      kategoriList: ["Sistem Informasi"],
      pengirimanList: [
        { kode: "REG", nama: "Reguler (3-5 hari)" },
        { kode: "EXP", nama: "Ekspres (1-2 hari)" }
      ],
      paket: [
        { kode: "PKT-01", nama: "Paket Semester 1 Sistem Informasi", isi: ["EKMA4434","MATA4110","MSIM4304"], harga: 160000 },
        { kode: "PKT-02", nama: "PAKET Semester 2 Sistem Informasi", isi: ["MSIM4309","MSIM4206","MATA4112"], harga: 180000 },
        { kode: "PKT-03", nama: "PAKET Semester 3 Sistem Informasi", isi: ["SATS4121","MSIM4302","MSIM4303"], harga: 200000 }
      ],
      stok: [
        {
          kode: "MSIM4309",
          judul: "Pemrograman Berbasis Web",
          kategori: "Sistem Informasi",
          upbjj: "Jakarta",
          lokasiRak: "Rak-A1",
          harga: 75000,
          qty: 25,
          safety: 10,
          catatanHTML: "<i>Edisi Terbaru</i>"
        },
        {
          kode: "MSIM4201",
          judul: "Sistem Operasi",
          kategori: "Sistem Informasi",
          upbjj: "Bogor",
          lokasiRak: "Rak-B2",
          harga: 65000,
          qty: 5,
          safety: 8,
          catatanHTML: "Sisa Stok Pameran"
        },
        {
          kode: "SATS4121",
          judul: "Aljabar Linear Elementer",
          kategori: "Sistem Informasi",
          upbjj: "Bandung",
          lokasiRak: "Rak-C1",
          harga: 50000,
          qty: 0,
          safety: 5,
          catatanHTML: "<b>Menunggu cetak ulang</b>"
        },
        {
          kode: "MSIM4207",
          judul: "Sistem Informasi Manajemen",
          kategori: "Sistem Informasi",
          upbjj: "Makassar",
          lokasiRak: "Rak-D3",
          harga: 70000,
          qty: 4,
          safety: 9,
          catatanHTML: "Sisa stok Pameran"
        }
      ],
      // Simulasi status DO (opsional fitur Tracking DO)
      tracking: {
        "DO2026-001": {
          nim: "054331277",
          nama: "Khairul Anam",
          status: "Dalam Perjalanan",
          ekspedisi: "JNE",
          tanggalKirim: "2026-03-02",
          paket: "PKT-01",
          total: 450000,
          perjalanan: [
            { waktu: "2025-08-25 10:13:10", keterangan: "Penerimaan di Loket: TANGSEL" },
            { waktu: "2025-08-25 14:08:07", keterangan: "Tiba di Hub: SULSEL" },
            { waktu: "2025-08-26 08:44:01", keterangan: "Diteruskan ke Kantor Tujuan" }
          ]
        }
      }
  }
});