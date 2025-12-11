# 🏗️ Mandiri Plafon - Website Jasa Konstruksi

Website profesional untuk mempromosikan jasa konstruksi dan bangunan **Mandiri Plafon** yang berlokasi di Daerah Istimewa Yogyakarta.

## 📋 Fitur Utama

✅ **Halaman Beranda (Hero Section)** - Tampilan menarik dengan penawaran jelas
✅ **Tentang Kami** - Deskripsi bisnis dan keunggulan layanan
✅ **4 Layanan Utama:**
   - Pemasangan Plafon (Gypsum, Aluminium, PVC)
   - Pemasangan Kanopi (Besi, Polycarbonate, Custom)
   - Desain Interior (Konsultasi hingga Finishing)
   - Pengubahan Model Bangunan (Renovasi, Modifikasi)

✅ **Portfolio/Galeri** - Showcase project terkini
✅ **Formulir Kontak** - Integrasi langsung ke WhatsApp
✅ **Floating WhatsApp Button** - Kemudahan kontak di setiap halaman
✅ **Responsive Design** - Optimal di desktop, tablet, dan mobile
✅ **Smooth Animations** - Efek visual yang profesional

## 📱 Kontak Bisnis

- **Nama:** Mandiri Plafon
- **Lokasi:** Daerah Istimewa Yogyakarta
- **WhatsApp:** +62 857 7390 7878
- **Jam Operasional:** Senin-Jumat 08:00-17:00, Sabtu 08:00-12:00 WIB

## 🚀 Cara Menggunakan

### 1. Membuka Website
Cukup buka file `index.html` di browser favorit Anda.

### 2. Struktur File
```
mandiri-plafon/
├── index.html              # File utama HTML
├── README.md              # File ini
├── assets/
│   ├── css/
│   │   └── style.css      # Styling website
│   ├── js/
│   │   └── script.js      # Fungsi interaktif
│   └── images/            # Folder untuk gambar (kosong)
```

### 3. Menambahkan Gambar

Untuk menambahkan gambar portfolio dan galeri:

1. **Siapkan gambar** - Simpan foto project di folder `assets/images/`
2. **Edit HTML** - Buka `index.html` dan ganti placeholder di section portfolio:

```html
<!-- Sebelum -->
<div class="portfolio-image">
    <i class="fas fa-image"></i>
    <p>Pemasangan Plafon Gypsum</p>
</div>

<!-- Sesudah -->
<div class="portfolio-image">
    <img src="assets/images/plafon-gypsum.jpg" alt="Pemasangan Plafon Gypsum">
    <p>Pemasangan Plafon Gypsum</p>
</div>
```

3. **Update CSS** - Tambahkan ke `style.css`:
```css
.portfolio-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## 🎨 Kustomisasi

### Mengubah Warna
Edit variabel di bagian atas `assets/css/style.css`:

```css
:root {
    --primary-color: #2c3e50;      /* Warna utama */
    --secondary-color: #3498db;    /* Warna aksen */
    --accent-color: #e74c3c;       /* Warna highlight */
}
```

### Mengubah Konten
- **Nama bisnis:** Edit di navbar dan footer
- **Nomor WhatsApp:** Cari "6285773907878" dan ganti dengan nomor Anda
- **Lokasi:** Edit di section About dan Contact
- **Layanan:** Tambah/hapus di section Services

### Menambah Layanan Baru
1. Duplikat `.service-card` di HTML
2. Ubah icon, judul, dan deskripsi
3. Update list fitur layanan

## 📞 Integrasi WhatsApp

**Fitur kontak otomatis ke WhatsApp:**
- Form kontak → Pesan dikirim ke WhatsApp
- Tombol WhatsApp floating di kanan bawah
- Link WhatsApp di section Hubungi Kami

Nomor WhatsApp: **+62 857 7390 7878** (dapat diubah di `index.html`)

## 🔧 Teknologi yang Digunakan

- **HTML5** - Struktur halaman
- **CSS3** - Styling & animasi
- **JavaScript** - Interaktivitas
- **Font Awesome** - Icon profesional
- **Google Fonts** - Typography

## 📱 Responsivitas

Website sudah dioptimalkan untuk:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (480px - 767px)
- ✅ Small Mobile (<480px)

## 🎯 Tips Penggunaan

1. **SEO Friendly** - Gunakan nama bisnis di judul halaman
2. **Mobile First** - Selalu test di mobile sebelum deploy
3. **Loading Images** - Compress gambar untuk performa lebih cepat
4. **Backup Rutin** - Simpan backup file secara berkala

## 📤 Deploy Website

Untuk upload ke hosting/server:
1. Upload semua file ke server hosting
2. Pastikan struktur folder tetap sama
3. Akses melalui domain/subdomain Anda

## ❓ FAQ

**Q: Bagaimana menambah foto portfolio?**
A: Simpan foto di `assets/images/` dan edit HTML di section portfolio.

**Q: Bisa pakai domain sendiri?**
A: Ya, upload semua file ke hosting, domain akan mengarah ke `index.html`.

**Q: Bagaimana form kontak bekerja?**
A: Form langsung membuka WhatsApp dengan pesan yang sudah diisi otomatis.

**Q: Bisa ubah warna tema?**
A: Ya, edit variabel CSS di `:root` di file `style.css`.

## 📝 Lisensi & Catatan

Website ini dibuat khusus untuk **Mandiri Plafon**. 
Silakan sesuaikan dengan kebutuhan bisnis Anda.

---

**Dibuat dengan ❤️ untuk Mandiri Plafon**
Yogyakarta, 2025
