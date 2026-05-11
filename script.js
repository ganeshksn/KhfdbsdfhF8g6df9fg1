/* ========================================
   Sri Visweswara Exports - JavaScript
   Interactive Features & Animations
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollReveal();
    initContactForm();
});

/* ========================================
   Navbar - Sticky on Scroll
   ======================================== */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const heroSection = document.querySelector('.hero');
    
    if (!navbar || !heroSection) return;
    
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ========================================
   Mobile Menu Toggle
   ======================================== */
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!hamburger || !navMenu) return;
    
    // Toggle menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu on outside click
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/* ========================================
   Smooth Scroll Navigation
   ======================================== */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            
            if (target) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ========================================
   Scroll Reveal Animation
   ======================================== */
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.reveal, .about-content, .about-visual, .product-card, .export-card, .feature-card, .contact-info, .contact-form-wrapper, .mission-card, .value-card, .cert-card, .stat-card, .packaging-card, .world-map'
    );
    
    revealElements.forEach(el => {
        el.classList.add('reveal');
    });
    
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
}

/* ========================================
   Contact Form Handling
   ======================================== */
const CONTACT_FORM_CONFIG = {
    // Admin setting: use "whatsapp" or "email".
    deliveryMethod: 'whatsapp',
    whatsappNumber: '919703768569',
    emailAddress: 'info@srivisweswaraexports.com',
    emailSubject: 'New inquiry from Sri Visweswara Exports website'
};

function initContactForm() {
    const form = document.getElementById('contactForm');
    const modal = document.getElementById('successModal');
    
    if (!form) return;

    if (modal) {
        const closeBtn = modal.querySelector('.btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const redirectUrl = getContactRedirectUrl(form);

        if (!redirectUrl) {
            if (modal) {
                modal.classList.add('active');
            }
            return;
        }

        window.location.href = redirectUrl;
    });
}

function getContactRedirectUrl(form) {
    const formData = new FormData(form);
    const productField = form.querySelector('[name="product"]');
    const selectedProduct = productField && productField.selectedIndex > -1
        ? productField.options[productField.selectedIndex].text
        : formData.get('product');
    const message = [
        'New Inquiry - Sri Visweswara Exports',
        '',
        `Name: ${formData.get('name') || ''}`,
        `Email: ${formData.get('email') || ''}`,
        `Phone / WhatsApp: ${formData.get('phone') || ''}`,
        `Product Interest: ${selectedProduct || ''}`,
        '',
        'Message:',
        formData.get('message') || ''
    ].join('\n');

    if (CONTACT_FORM_CONFIG.deliveryMethod === 'email') {
        const subject = encodeURIComponent(CONTACT_FORM_CONFIG.emailSubject);
        const body = encodeURIComponent(message);
        return `mailto:${CONTACT_FORM_CONFIG.emailAddress}?subject=${subject}&body=${body}`;
    }

    if (CONTACT_FORM_CONFIG.deliveryMethod === 'whatsapp') {
        const phone = CONTACT_FORM_CONFIG.whatsappNumber.replace(/\D/g, '');
        return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    }

    return '';
}

function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

/* ========================================
   Additional Utility Functions
   ======================================== */

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            width: 10px;
            height: 10px;
            background: rgba(255,255,255,0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
        `;
        
        btn.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(20);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Export button hover effect
document.querySelectorAll('.export-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.export-flag').style.transform = 'scale(1.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.export-flag').style.transform = 'scale(1)';
    });
});
