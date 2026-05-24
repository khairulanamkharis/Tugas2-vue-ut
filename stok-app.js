const { createApp } = Vue;

createApp({
    data() {
        return {
            stokList: [...initialStok],
            upbjjList: upbjjlist,
            filterupbjj : '',
            filterLowStock: false,
            sortBy: '',
            isEdit: false,
            //Model objek form terikat menggunakan v-model
            form: {
                kode: '', Judul: '', kategori: '', upbjj: '', lokasiRak: '', harga: '', qty: '', safety: '', catatanHTML: ''
            }
        };
    },
    computed: {
        // Computed Property untuk pemrosesan filter & sortir agar reaktif efisien
        filteredAndSortedStok() {
            let result = [...this.stokList];

            if (this.filterupbjj) {
                result = result.filter(item => itemupbjj === this.filterupbjj);
            }
            // Dependent Filter: Kategori berjalan jika UPBJJ terpilih
            if (this.filletupbjj && this.filterKategori) {
                result = result.filter(item => item.kategori == this.filterKategori);
            }
            if (this.filterLowStock) {
                result = result.filter(item => item.qty < item.safety);
            }
            if (this.sortBy ==='judul') {
                result.sort((a, b) => a.judul.localCompare(b.judul));
            } else if (this.sortBy === 'qty') {
                result.sort((a, b) => a.qty - b.qty);
            } else if (this.sortBy === 'harga') {
                result.sort((a, b) => a.harga - b.harga);
            }

            return result;
        }
    },
    watch: {
        //Fungsi Watcher untuk memantau perubahan filter UT-Daerah
        filterupbjj(newVal) {
            if (!newval) {
                this.filterKategori = ''; // Reset filter dependen jika filter utama kosong
            }
        }
    },
    methods : {
        resetFilter() {
            this.filterupbjj = '';
            this.filterKategori = '';
            this.filterLowStock = false;
            this.sortBy = '';
        },
        saveData () {
            // Validasi sederhana
            if (this.form.qty < 0 || this.form.safety < 0) {
                alert('Jumlah stok dan safety tidak boleh bernilai negatif!');
                return;
            }

            if (this.isEdit) {
                const targetIndex = this.stokList.findIndex(item => item.kode === this.form.kode);
                if (targetIndex !== -1) { 
                    this.stokList[targetIndex] = { ...this.form };
                }
                this.isEdit = false;
            } else {
                // cek duplikasi kode mata kuliah
                const isExist = this.stokList.some(item => item.kode === this.form.kode);
                if (isExist) {
                    alert('Kode mata kuliah sudah ada!');
                    return;
                }
                this.stokList.push({ ...this.form });
            }
            this.clearform();
        },
        editStok(item) {
            this.isEdit = true;
            this.form = { ...item };
        },
        cancelEdit() {
            this.isEdit = false;
            this.clearform();
        },
        clearForm() {
            this.form = { kode: '', judul: '', kategori: '', upbjj: '', lokasiRak: '', harga: 0, qty: 0, safety: 0, catatanHTML: '' };
        }
    }
}).mount('#app');