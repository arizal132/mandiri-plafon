// ========================================
// Mobile Menu Toggle
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // ========================================
    // Form Submission
    // ========================================

    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formInputs = contactForm.querySelectorAll('input, select, textarea');
            const name = formInputs[0].value;
            const email = formInputs[1].value;
            const phone = formInputs[2].value;
            const service = formInputs[3].value;
            const message = formInputs[4].value;

            const whatsappNumber = '6285773907878';
            const whatsappMessage = `Halo, saya ingin menanyakan layanan Mandiri Plafon.

*Nama:* ${name}
*Email:* ${email}
*Nomor Telepon:* ${phone}
*Layanan yang diminati:* ${service}

*Pesan:*
${message}

Terima kasih.`;

            const encodedMessage = encodeURIComponent(whatsappMessage);
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
            contactForm.reset();
            alert('Pesan Anda akan dikirim ke WhatsApp kami. Terima kasih!');
        });
    }

    // ========================================
    // Smooth Scroll Navigation
    // ========================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // Navbar Shadow on Scroll
    // ========================================

    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });

    // ========================================
    // Intersection Observer for Animations
    // ========================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .portfolio-item, .card-hover').forEach(el => {
        observer.observe(el);
    });

    // ========================================
    // Active Navigation Link
    // ========================================

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-blue-600', 'border-b-2', 'border-blue-600');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('text-blue-600');
            }
        });
    });

    // ========================================
    // Back to Top Button
    // ========================================

    window.addEventListener('scroll', () => {
        let backToTopBtn = document.getElementById('backToTopBtn');
        
        if (window.pageYOffset > 300) {
            if (!backToTopBtn) {
                const btn = document.createElement('button');
                btn.id = 'backToTopBtn';
                btn.innerHTML = '<i class="fas fa-chevron-up"></i>';
                btn.className = 'fixed bottom-24 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center z-40 hover:shadow-lg transition transform hover:scale-110 animate-fade-in';
                document.body.appendChild(btn);

                btn.addEventListener('click', () => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            }
        } else if (backToTopBtn) {
            backToTopBtn.remove();
        }
    });

    // ========================================
    // Lazy Loading for Images
    // ========================================

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('opacity-0');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ========================================
    // Counter Animation for Stats
    // ========================================

    function countUp(element, target, duration = 2000) {
        let current = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + (element.textContent.includes('+') ? '+' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
            }
        }, 16);
    }

    // Trigger counter animation when stat section is visible
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stats = entry.target.querySelectorAll('.text-3xl');
                stats.forEach(stat => {
                    const value = parseInt(stat.textContent);
                    if (!stat.classList.contains('counted')) {
                        countUp(stat, value);
                        stat.classList.add('counted');
                    }
                });
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroSection = document.getElementById('home');
    if (heroSection) {
        statObserver.observe(heroSection);
    }

    // ========================================
    // Form Input Effects
    // ========================================

    const formInputs = document.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('ring-2', 'ring-blue-500');
        });

        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('ring-2', 'ring-blue-500');
        });
    });

    // ========================================
    // Parallax Effect (Optional)
    // ========================================

    const parallaxElements = document.querySelectorAll('[data-parallax]');
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', () => {
            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-parallax');
                element.style.transform = `translateY(${window.scrollY * speed}px)`;
            });
        });
    }

    // ========================================
    // Performance Optimization
    // ========================================

    // Debounce scroll event
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                ticking = false;
            });
            ticking = true;
        }
    });

    console.log('✨ Mandiri Plafon - Website Modern Loaded Successfully!');
});

// ========================================
// Service Worker Registration (PWA)
// ========================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when service worker is ready
        // navigator.serviceWorker.register('sw.js');
    });
}
