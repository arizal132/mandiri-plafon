# 🌙 PANDUAN DARK MODE & ADVANCED FEATURES

## Dark Mode Implementation (Optional)

Jika ingin menambahkan dark mode toggle, berikut caranya:

### 1. Tambahkan Toggle Button di Navbar

```html
<!-- Di dalam navbar, sebelum closing </nav> -->
<button id="darkModeToggle" class="p-2 rounded-lg hover:bg-gray-100">
    <i class="fas fa-moon"></i>
</button>
```

### 2. Tambahkan JavaScript untuk Dark Mode

```javascript
// Tambahkan di assets/js/script.js

const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

// Check preferensi user sebelumnya
if (localStorage.getItem('darkMode') === 'enabled') {
    html.classList.add('dark');
}

darkModeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    
    if (html.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
});
```

### 3. Update Tailwind Config

Tailwind CDN sudah support dark mode. Cukup tambahkan `dark:` prefix:

```html
<!-- Contoh -->
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    Content
</div>
```

---

## Advanced Customizations

### 1. Tambahkan Testimonial Section

```html
<section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16">Testimoni Klien</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Testimonial Card -->
            <div class="bg-white p-8 rounded-2xl shadow-lg">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                    <div>
                        <p class="font-semibold">Nama Klien</p>
                        <p class="text-sm text-gray-600">Perusahaan</p>
                    </div>
                </div>
                <div class="flex gap-1 mb-4">
                    <i class="fas fa-star text-yellow-400"></i>
                    <i class="fas fa-star text-yellow-400"></i>
                    <i class="fas fa-star text-yellow-400"></i>
                    <i class="fas fa-star text-yellow-400"></i>
                    <i class="fas fa-star text-yellow-400"></i>
                </div>
                <p class="text-gray-700">"Layanan Mandiri Plafon sangat profesional dan hasil kerjanya memuaskan."</p>
            </div>
        </div>
    </div>
</section>
```

### 2. Tambahkan FAQ Section

```html
<section class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16">Pertanyaan Umum</h2>
        
        <div class="space-y-4">
            <details class="group bg-gray-50 p-6 rounded-lg cursor-pointer">
                <summary class="flex items-center justify-between font-semibold">
                    <span>Berapa lama waktu pengerjaan?</span>
                    <i class="fas fa-chevron-down group-open:rotate-180 transition"></i>
                </summary>
                <p class="text-gray-600 mt-4">Waktu pengerjaan tergantung ukuran dan kompleksitas proyek. Biasanya 2-4 minggu untuk proyek standar.</p>
            </details>
        </div>
    </div>
</section>
```

### 3. Tambahkan Blog Section

```html
<section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16">Blog Terbaru</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div class="h-48 bg-gradient-to-br from-blue-400 to-purple-600"></div>
                <div class="p-6">
                    <p class="text-sm text-blue-600 font-semibold mb-2">12 Desember 2025</p>
                    <h3 class="text-xl font-bold mb-3">Tips Memilih Plafon yang Tepat</h3>
                    <p class="text-gray-600 mb-4">Panduan lengkap untuk memilih jenis plafon yang sesuai dengan kebutuhan dan budget Anda.</p>
                    <a href="#" class="text-blue-600 font-semibold hover:underline">Baca Selengkapnya →</a>
                </div>
            </article>
        </div>
    </div>
</section>
```

### 4. Tambahkan Newsletter Signup

```html
<section class="gradient-primary text-white py-16">
    <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Dapatkan Update Terbaru</h2>
        <p class="text-lg opacity-90 mb-8">Subscribe newsletter kami untuk tips konstruksi dan promo spesial</p>
        
        <form class="flex flex-col sm:flex-row gap-4">
            <input type="email" placeholder="Email Anda" class="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none" required>
            <button type="submit" class="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:shadow-lg transition">
                Subscribe
            </button>
        </form>
    </div>
</section>
```

### 5. Tambahkan Team Section

```html
<section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-16">Tim Kami</h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
                <div class="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full"></div>
                <h3 class="text-lg font-bold">Nama Anggota</h3>
                <p class="text-gray-600">Posisi</p>
                <div class="flex justify-center gap-4 mt-4">
                    <a href="#" class="text-blue-600 hover:text-blue-700"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="text-blue-600 hover:text-blue-700"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## Performance Optimization Tips

### 1. Image Optimization

```html
<!-- Sebelum -->
<img src="portfolio.jpg" alt="Portfolio">

<!-- Sesudah (dengan WebP fallback) -->
<picture>
    <source srcset="portfolio.webp" type="image/webp">
    <img src="portfolio.jpg" alt="Portfolio" loading="lazy">
</picture>
```

### 2. CSS Minification

Jika ingin production-ready, minify custom.css:
```bash
# Gunakan online minifier di https://cssnano.co/playground/
```

### 3. JavaScript Optimization

```javascript
// Lazy load script
if ('IntersectionObserver' in window) {
    // Gunakan untuk lazy load berbagai elemen
}
```

### 4. Preload Critical Resources

```html
<link rel="preload" as="style" href="assets/css/custom.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
```

---

## SEO Enhancement

### 1. Meta Tags

```html
<meta name="description" content="Mandiri Plafon - Jasa konstruksi profesional di Yogyakarta">
<meta name="keywords" content="plafon, kanopi, konstruksi, renovasi, yogyakarta">
<meta name="author" content="Mandiri Plafon">
<meta property="og:title" content="Mandiri Plafon">
<meta property="og:description" content="Layanan konstruksi berkualitas tinggi">
<meta property="og:image" content="assets/images/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
```

### 2. Structured Data (Schema.org)

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mandiri Plafon",
    "image": "assets/images/logo.jpg",
    "telephone": "+6285773907878",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Yogyakarta",
        "addressCountry": "ID"
    }
}
</script>
```

---

## Analytics Integration

### Google Analytics 4

```html
<!-- Di dalam <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Facebook Pixel

```html
<!-- Di dalam <head> -->
<script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    // ... rest of Facebook Pixel code
}
</script>
```

---

## Security Best Practices

### 1. Content Security Policy

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self' https:; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com;">
```

### 2. Form Validation

```javascript
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
        return false;
    }
});
```

### 3. HTTPS Only

Pastikan website di-serve via HTTPS, bukan HTTP.

---

## Mobile App Integration (Optional)

Jika ingin membuat PWA (Progressive Web App):

### 1. Create manifest.json

```json
{
    "name": "Mandiri Plafon",
    "short_name": "Mandiri",
    "description": "Jasa konstruksi profesional",
    "start_url": "/",
    "display": "standalone",
    "theme_color": "#667eea",
    "background_color": "#ffffff",
    "icons": [
        {
            "src": "assets/images/icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
        }
    ]
}
```

### 2. Link in HTML

```html
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#667eea">
```

### 3. Create Service Worker

```javascript
// sw.js
const CACHE_NAME = 'mandiri-v1';
const urlsToCache = [
    '/',
    'index.html',
    'assets/css/custom.css',
    'assets/js/script.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});
```

---

## Deployment Options

### 1. Vercel (Recommended for Static Sites)
```bash
npm install -g vercel
vercel
```

### 2. Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### 3. GitHub Pages
Upload ke GitHub repository dan enable GitHub Pages.

### 4. Traditional Hosting
Upload semua file ke server hosting via FTP/SFTP.

---

## Testing & QA

### Browser Compatibility
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers

### Device Testing
- ✅ iPhone 12+
- ✅ Android phones
- ✅ iPad/Tablets
- ✅ Desktop 1920x1080+

### Performance Testing
- Lighthouse score: 90+
- Page load time: < 3s
- Mobile performance: > 85

---

## Resources & References

1. **Tailwind CSS**: https://tailwindcss.com
2. **Font Awesome**: https://fontawesome.com
3. **Google Fonts**: https://fonts.google.com
4. **MDN Web Docs**: https://developer.mozilla.org
5. **CSS-Tricks**: https://css-tricks.com

---

**Happy Coding! 🚀**

Jika ada pertanyaan, tinggal explore dokumentasi di atas atau check referensi resmi.

Yogyakarta, 2025
