// hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// tlačidlo hore
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add('visible');
    } else {
        scrollBtn.classList.remove('visible');
    }
});
if (scrollBtn) {
    scrollBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// cookie lišta
const cookieBar = document.getElementById('cookieBar');
const acceptBtn = document.getElementById('acceptCookies');
if (cookieBar && acceptBtn) {
    if (localStorage.getItem('cookiesAccepted')) {
        cookieBar.style.display = 'none';
    }
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBar.style.display = 'none';
    });
}

// kontaktný formulár
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Ďakujeme za správu. Ozveme sa vám najneskôr do 24 hodín.');
        form.reset();
    });
}