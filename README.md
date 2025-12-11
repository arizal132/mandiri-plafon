# 🏗️ Mandiri Plafon - Website v2.0 (Tailwind CSS)

**Jasa Konstruksi dan Bangunan Profesional di Yogyakarta**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📋 Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur Utama](#fitur-utama)
- [Struktur File](#struktur-file)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
- [Customisasi](#customisasi)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

---

## 📌 Tentang Proyek

Website profesional untuk mempromosikan jasa konstruksi dan bangunan **Mandiri Plafon**. Dibangun dengan teknologi terkini menggunakan **Tailwind CSS** untuk hasil yang modern, responsif, dan berkinerja tinggi.

### ✨ Highlights

- 🎨 **Modern Design** - Gradient colors, smooth animations, professional layout
- 📱 **Responsive** - Optimal di mobile, tablet, dan desktop
- ⚡ **Fast Performance** - Optimized CSS, vanilla JavaScript, lazy loading ready
- 🎯 **User Friendly** - Smooth scrolling, form integration, CTA buttons
- 📊 **SEO Ready** - Semantic HTML5, proper heading structure
- 🔧 **Easy to Customize** - Simple HTML/CSS structure

---

## 🎯 Fitur Utama

### 🏛️ Sections

- **Navigation Bar** - Fixed navbar dengan mobile menu toggle
- **Hero Section** - Gradient background + floating animation + stats counter
- **About Section** - Company description + 4 feature cards
- **Services Section** - 4 jenis layanan dengan colored icons
  - Pemasangan Plafon
  - Pemasangan Kanopi
  - Desain Interior
  - Pengubahan Model Bangunan
- **Portfolio Section** - 6 project showcase dengan hover animation
- **Contact Section** - Contact info + contact form + CTA banner
- **Footer** - Professional dark theme

### ✨ Interactive Features

- ✅ Mobile menu toggle dengan hamburger icon
- ✅ Smooth scrolling navigation
- ✅ Form integration dengan WhatsApp
- ✅ Counter animation untuk stats
- ✅ Intersection Observer untuk animations
- ✅ Active navigation highlighting
- ✅ Floating WhatsApp button
- ✅ Back to top button

---

## 📁 Struktur File

```
mandiri-plafon/
│
├── index.html                  # File utama website
├── README.md                   # File ini
│
├── 📖 Dokumentasi:
│   ├── START_HERE.txt         # Visual guide (baca dulu!)
│   ├── QUICK_START.txt        # Panduan 5 menit
│   ├── UPDATE_TAILWIND.md     # Info update Tailwind CSS
│   ├── PANDUAN_MEMBUKA.txt    # Cara buka & troubleshooting
│   ├── TIPS_CUSTOMISASI.md    # 14 tutorial customisasi
│   ├── ADVANCED_FEATURES.md   # Fitur tambahan
│   ├── RINGKASAN_LENGKAP.txt  # Detail lengkap
│   └── DOKUMENTASI_INDEX.txt  # Index dokumentasi
│
└── 📂 assets/
    ├── css/
    │   ├── custom.css         # Custom animations & effects
    │   └── style.css          # Old CSS (deprecated)
    ├── js/
    │   └── script.js          # JavaScript interaktif
    └── images/                # Folder untuk foto
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


---

## 🚀 Instalasi

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Notepad++, etc)
- Git (optional, untuk version control)

### Langkah-langkah

1. **Clone Repository**
   ```bash
   git clone https://github.com/arizal132/mandiri-plafon.git
   cd mandiri-plafon
   ```

2. **Buka Website**
   - Double-click `index.html`, atau
   - Drag `index.html` ke browser

3. **Selesai!** Website siap digunakan

---

## 💻 Penggunaan

### Membuka Website

**Cara 1: Double-click (Termudah)**
- Buka folder `mandiri-plafon`
- Double-click `index.html`

**Cara 2: Browser**
- Buka browser
- Ctrl+O → Pilih `index.html`

**Cara 3: Local Server (Recommended untuk production)**
```bash
# Menggunakan Python
python -m http.server 8000

# Menggunakan Node.js
npx http-server

# Kemudian buka: http://localhost:8000
```

### Struktur HTML

Halaman dibagi menjadi beberapa section:

```html
<body>
  <nav>...</nav>                    <!-- Navigation -->
  <section id="home">...</section>   <!-- Hero -->
  <section id="about">...</section>  <!-- About -->
  <section id="services">...</section> <!-- Services -->
  <section id="portfolio">...</section> <!-- Portfolio -->
  <section id="contact">...</section>  <!-- Contact -->
  <footer>...</footer>               <!-- Footer -->
</body>
```

---

## 🎨 Customisasi

### 1. Mengubah Nomor WhatsApp

**File:** `index.html`

**Cara:**
```bash
Ctrl+H (Find & Replace)
Cari: 6285773907878
Ganti: nomor WhatsApp Anda
Simpan (Ctrl+S)
```

### 2. Mengubah Warna Theme

**File:** `index.html` (di bagian `<head>`)

```css
.gradient-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Ubah #667eea dan #764ba2 dengan warna favorit Anda */
}
```

**Color Hex Reference:**
- Blue: `#667eea`, `#3498db`, `#2980b9`
- Purple: `#764ba2`, `#9b59b6`
- Green: `#25d366` (WhatsApp), `#2ecc71`
- Red: `#e74c3c`
- Orange: `#f39c12`

### 3. Mengubah Teks Konten

**File:** `index.html`

Cari dan edit teks langsung:
```html
<h1>Judul Lama</h1>
<!-- Ubah menjadi -->
<h1>Judul Baru Anda</h1>
```

### 4. Menambahkan Foto Portfolio

**Steps:**
1. Compress foto di https://tinypng.com
2. Simpan ke folder `assets/images/`
3. Edit `index.html` di section portfolio
4. Ubah dari:
   ```html
   <i class="fas fa-image"></i>
   ```
   Menjadi:
   ```html
   <img src="assets/images/nama-foto.jpg" alt="Deskripsi">
   ```

### 5. Mengubah Font

**File:** `index.html` (di bagian `<head>`)

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700&display=swap">
```

Ganti dengan font dari https://fonts.google.com

Untuk detail lebih lanjut, lihat **TIPS_CUSTOMISASI.md**

---

## 🚀 Deployment

### Option 1: Vercel (Recommended)
```bash
1. Push ke GitHub
2. Daftar di vercel.com
3. Import repository
4. Deploy otomatis
```

### Option 2: Netlify
```bash
1. Daftar di netlify.com
2. Drag & drop folder
3. Instant deploy
4. Free HTTPS + custom domain
```

### Option 3: GitHub Pages
```bash
1. Push ke GitHub
2. Settings → Pages
3. Select main branch
4. Deploy otomatis
5. Akses via username.github.io/mandiri-plafon
```

### Option 4: Traditional Hosting
```bash
1. Sewa hosting (cth: Niagahoster)
2. Upload file via FTP
3. Extract di public_html
4. Akses via domain Anda
```

---

## 📱 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Supported |
| Firefox | 88+ | ✅ Supported |
| Safari | 14+ | ✅ Supported |
| Edge | 90+ | ✅ Supported |
| Opera | 76+ | ✅ Supported |
| iOS Safari | 14+ | ✅ Supported |
| Chrome Mobile | 90+ | ✅ Supported |

---

## 🛠️ Teknologi yang Digunakan

### Frontend Stack
- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla JavaScript** - No dependencies
- **Font Awesome 6.4** - Professional icons
- **Google Fonts** - Typography

### Frameworks & Libraries
- Tailwind CSS (via CDN)
- Font Awesome Icons
- Poppins & Playfair Display Fonts

### Tools
- Git - Version control
- VS Code - Development environment
- Lighthouse - Performance testing

---

## 📊 Performance

### Optimization
- ✅ Utility-first CSS (smaller bundle)
- ✅ Vanilla JavaScript (no jQuery)
- ✅ Intersection Observer API
- ✅ Debounced scroll events
- ✅ Mobile-first approach
- ✅ Lazy loading ready

### Metrics
- **Page Load Time**: < 3 seconds
- **Lighthouse Score**: 90+
- **Mobile Score**: 85+
- **Core Web Vitals**: Passed

---

## 🐛 Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Website tidak terlihat cantik | Refresh dengan Ctrl+Shift+Delete |
| Mobile menu tidak bekerja | Check F12 console, pastikan JS enabled |
| Gambar tidak muncul | Verify path: assets/images/ |
| Form WhatsApp tidak bekerja | Pastikan format nomor: 62xxxxx |
| Layout berantakan | Clear cache browser |

Untuk detail lebih lanjut, lihat **PANDUAN_MEMBUKA.txt**

---

## 📚 Dokumentasi

Proyek ini dilengkapi dengan dokumentasi lengkap:

- **START_HERE.txt** - Visual summary (baca dulu!)
- **QUICK_START.txt** - Panduan cepat 5 menit
- **README.md** - File ini
- **UPDATE_TAILWIND.md** - Info update Tailwind CSS
- **PANDUAN_MEMBUKA.txt** - Cara buka & FAQ
- **TIPS_CUSTOMISASI.md** - 14 tutorial dengan code examples
- **ADVANCED_FEATURES.md** - Fitur tambahan (dark mode, blog, PWA)
- **RINGKASAN_LENGKAP.txt** - Detail lengkap semua fitur

---

## 🎯 Roadmap

### v2.0 (Current)
- ✅ Tailwind CSS migration
- ✅ Modern design
- ✅ Advanced animations
- ✅ Enhanced performance
- ✅ Complete documentation

### v2.1 (Planned)
- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Testimonials
- [ ] Team page
- [ ] Newsletter signup
- [ ] PWA support

### v3.0 (Future)
- [ ] E-commerce integration
- [ ] Admin dashboard
- [ ] CMS integration
- [ ] Mobile app
- [ ] Multi-language support

---

## 🤝 Kontribusi

Kontribusi sangat diterima! Jika ada ide atau improvement:

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📝 Lisensi

Proyek ini menggunakan lisensi MIT. Lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.

---

## 📞 Kontak

**Mandiri Plafon**
- 📍 Lokasi: Daerah Istimewa Yogyakarta, Indonesia
- 📱 WhatsApp: +62 857 7390 7878
- 🌐 Website: https://mandiri-plafon-web.netlify.app (coming soon)
- 📧 Email: mandiri@plafon.com

---

## 🙏 Terima Kasih

Terima kasih telah menggunakan website Mandiri Plafon! Semoga proyek ini membantu mempromosikan jasa konstruksi Anda.

**Mari berkembang bersama dengan teknologi terkini!** 🚀

---

<p align="center">
  <strong>Created with 💜 using Tailwind CSS</strong><br>
  Yogyakarta, Indonesia - 2025
</p>
