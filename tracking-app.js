const { createApp } = Vue;

createApp({
    data() {
        return {
            // data awal tracking DO
            trackingList: [
                { doNum: 'DO2026-001', nim: '054331277', nama: 'Khairul Anam', ekspedisi: 'JNE Regular', paketKode: 'PKT-01', paketNama: 'Paket Semester 1 Sistem Informasi', tglKirim:'2026-05-20', totalHarga: 450000 }
        ],
        paketList: paket;
        form: {
            nim: '',
            nama: '',
            ekspedisi: 'JNE Regular',
            paketKode: '',
            // mengisi tanggal default secara otomatis berdasarkan local time saat ini
            tglKirim: new Date().toISOString().split('T')[0]
        },
        calculatedPrice: 0,
        selectedPaketInfo: null
    };
  },
  computed: {
      //menghitung nomor DO berikutnya secara otomatis dengan format DO[Tahun]-[Sequence]
      nextDONumber() {
          const currentYear = new Date().getFullYear();
          const nextSequence = String(this.trackingList.length + 1).padstart(3, '0');
          return `DO${currentYear}-${nextSequence}`;
        }
      },
      watch: {
          // Penggunaan Watcher untuk mendeteksi perubahan pemilihan paket bahan ajar
          'form.paketKode'(newKode) {
              const targetPaket = this.paketList.find(p => p.kode === newKode);
              if (targetPaket) {
                  this.selectedPaketInfo = targetPaket;
                  this.calculatedPrice = targetPaket.harga; // memasukkan nilai array object paket -> harga
                } else {
                  this.selectedPaketInfo = null;
                  this.calculatedPrice = 0;
                }
              }
       },
      methods: {
          submitDO() {
              if (!this.form.nim || !this.form.nama || !this.form.paketKode) {
                  alert('Semua data form mohon dilengkapi.');
                  return;
            }

            // menambahkan data entri ke dalam array list tracking
            this.trackingList.push({
                doNum : this.nextDONumber,
                nim : this.form.nim,
                nama : this.form.nama,
                ekspedisi: this.form.ekspedisi,
                paketKode: this.form.paketKode,
                paketNama: this.form.paketInfo.nama,
                tglKirim: this.formtglKirim,
                totalHarga: this.calculatedPrice
            });

            // reset form entri mahasiswa
            this.form.nim = '';
            this.form.nama = '';
            this.form.paketKode = '';
            this.form.tglKirim = new Date().toISOString().split('T')[0];
        }
    }
}).mount('#app');
            