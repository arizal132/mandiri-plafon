# 🎨 TIPS CUSTOMISASI DAN FAQ

## 1. MENGUBAH KONTEN TEKS

### Mengubah Judul Halaman
Buka `index.html`, cari baris ke-5:
```html
<title>Mandiri Plafon - Jasa Konstruksi dan Bangunan Yogyakarta</title>
```
Ganti dengan judul Anda.

### Mengubah Deskripsi Hero
Cari bagian:
```html
<h2>Jasa Konstruksi dan Bangunan Terpercaya</h2>
<p>Kami menyediakan layanan pemasangan plafon, kanopi, pengubahan model, dan desain interior dengan kualitas terbaik</p>
```
Sesuaikan dengan kalimat Anda sendiri.

### Mengubah Deskripsi Layanan
Setiap layanan punya deskripsi. Cari section Services dan edit teks di setiap `.service-card`.

---

## 2. MENAMBAH/MENGURANGI LAYANAN

### Menambah Layanan Baru
1. Buka `index.html`
2. Cari `<div class="services-grid">` 
3. Copy salah satu `.service-card` dan paste di bawahnya
4. Ubah icon, judul, dan deskripsi:

```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-icon-name"></i>  <!-- Ubah icon -->
    </div>
    <h3>Nama Layanan Baru</h3>  <!-- Ubah judul -->
    <p>Deskripsi layanan Anda...</p>  <!-- Ubah deskripsi -->
    <ul class="service-features">
        <li>✓ Fitur 1</li>
        <li>✓ Fitur 2</li>
    </ul>
</div>
```

### Daftar Icon yang Tersedia
Gunakan dari Font Awesome:
- `fas fa-paint-brush` = Kuas (desain)
- `fas fa-hammer` = Palu (konstruksi)
- `fas fa-tools` = Alat
- `fas fa-wrench` = Kunci Pas
- `fas fa-cube` = Kubus
- `fas fa-layer-group` = Lapisan

[Lihat semua: fontawesome.com/icons](https://fontawesome.com/icons)

---

## 3. MENAMBAH PORTFOLIO/GAMBAR

### Menambah Foto Project
1. Simpan foto ke: `assets/images/`
2. Buka `index.html`, cari `.portfolio-grid`
3. Edit HTML untuk menampilkan gambar:

**Sebelum:**
```html
<div class="portfolio-item">
    <div class="portfolio-image">
        <i class="fas fa-image"></i>
        <p>Pemasangan Plafon Gypsum</p>
    </div>
</div>
```

**Sesudah:**
```html
<div class="portfolio-item">
    <div class="portfolio-image">
        <img src="assets/images/plafon-gypsum.jpg" alt="Pemasangan Plafon Gypsum">
        <p>Pemasangan Plafon Gypsum</p>
    </div>
</div>
```

4. Tambahkan CSS ke `assets/css/style.css`:
```css
.portfolio-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

---

## 4. MENGUBAH WARNA TEMA

### Warna Utama
Edit di `assets/css/style.css`, bagian `:root`:

```css
:root {
    --primary-color: #2c3e50;    /* Warna navbar & background */
    --secondary-color: #3498db;  /* Warna tombol & accent */
    --accent-color: #e74c3c;     /* Warna highlight */
    --light-bg: #ecf0f1;         /* Warna background light */
}
```

### Contoh Kombinasi Warna:

**Tema Professional Blue:**
```css
--primary-color: #0c3c5d;
--secondary-color: #1e90ff;
--accent-color: #ff6b6b;
```

**Tema Energik Orange:**
```css
--primary-color: #1a1a1a;
--secondary-color: #ff8c00;
--accent-color: #ffd700;
```

**Tema Hijau Alami:**
```css
--primary-color: #1e5631;
--secondary-color: #2ecc71;
--accent-color: #e67e22;
```

---

## 5. MENGUBAH FONT & TYPOGRAPHY

### Mengganti Font Keseluruhan
Edit di `assets/css/style.css`:

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* Ganti dengan font favorit Anda */
}
```

Contoh font:
- `'Arial', sans-serif`
- `'Trebuchet MS', sans-serif`
- `'Courier New', monospace`

### Mengubah Ukuran Judul
Cari `.section-title` di CSS:
```css
.section-title {
    font-size: 2.5rem;  /* Ubah angka ini */
}
```

---

## 6. MENAMBAH SOCIAL MEDIA

### Menambah Link Instagram
1. Buka `index.html`
2. Cari section footer
3. Tambahkan:
```html
<a href="https://instagram.com/username" target="_blank">
    <i class="fab fa-instagram"></i>
</a>
```

### Menambah Link Facebook
```html
<a href="https://facebook.com/username" target="_blank">
    <i class="fab fa-facebook"></i>
</a>
```

---

## 7. MENGUBAH FORM KONTAK

### Menambah Field Baru di Form
1. Buka `index.html`
2. Cari `<form id="contactForm">`
3. Tambahkan input baru:

```html
<div class="form-group">
    <input type="text" placeholder="Alamat Lengkap" required>
</div>
```

### Tipe Input yang Bisa Digunakan:
- `type="text"` - Teks biasa
- `type="email"` - Email
- `type="tel"` - Telepon
- `type="number"` - Angka
- `type="date"` - Tanggal

---

## 8. MENGUBAH JAM OPERASIONAL

Buka `index.html`, cari di section Contact:
```html
<h4>Jam Operasional</h4>
<p>Senin - Jumat: 08:00 - 17:00 WIB<br>
   Sabtu: 08:00 - 12:00 WIB<br>
   Minggu: Libur
</p>
```

Ganti dengan jam Anda.

---

## 9. MENAMBAHKAN PETA LOKASI

Jika ingin tambah Google Maps:
1. Buka `index.html`
2. Tambahkan di section contact:
```html
<div class="map-container">
    <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</div>
```

3. Dapatkan embed code dari: [Google Maps](https://maps.google.com)

---

## 10. TIPS PERFORMA WEBSITE

### Mengoptimalkan Gambar
- Ukuran: 800x600 pixel untuk portfolio
- Format: JPG atau WebP
- Compress dengan tool: [TinyPNG.com](https://tinypng.com)

### Mengecilkan CSS/JS
- Hilangkan spasi & indentasi (opsional)
- Hasilnya lebih cepat loading

### Loading Gambar Lazy
Ubah `<img>` menjadi:
```html
<img src="..." loading="lazy" alt="...">
```

---

## 11. MENAMBAHKAN FAVICON

Favicon adalah icon kecil di tab browser.

1. Siapkan gambar 32x32 pixel
2. Simpan ke `assets/images/favicon.ico`
3. Buka `index.html`, tambahkan di `<head>`:
```html
<link rel="icon" type="image/x-icon" href="assets/images/favicon.ico">
```

---

## 12. RESPONSIVE DESIGN - CUSTOM

Jika ingin ubah breakpoint (ukuran layar):
Edit di `assets/css/style.css`:

```css
@media (max-width: 768px) {
    /* Styling untuk tablet & mobile */
}

@media (max-width: 480px) {
    /* Styling untuk mobile kecil */
}
```

---

## 13. MENAMBAHKAN ANIMASI CUSTOM

### Animasi Fade In
```css
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.element {
    animation: fadeIn 1s ease;
}
```

### Animasi Scale
```css
@keyframes scaleUp {
    from {
        transform: scale(0.5);
    }
    to {
        transform: scale(1);
    }
}
```

---

## 14. SETTING ANALYTICS (GOOGLE ANALYTICS)

Jika ingin tracking visitor:
1. Buat akun: [Google Analytics](https://analytics.google.com)
2. Dapatkan tracking ID
3. Tambahkan ke `<head>` di `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Ganti `GA_ID` dengan tracking ID Anda.

---

## 15. TROUBLESHOOTING COMMON ISSUES

| Masalah | Solusi |
|---------|--------|
| CSS tidak apply | Refresh dengan Ctrl+Shift+R |
| Form tidak bekerja | Cek nomor WhatsApp di HTML |
| Gambar tidak muncul | Cek path folder & nama file |
| Layout berantakan | Pastikan CSS file terhubung |
| Menu tidak responsive | Clear cache browser |

---

**Dengan tips ini, Anda bisa customize website sesuai kebutuhan!** 🚀

Semoga berhasil! 💪
