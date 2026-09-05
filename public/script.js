// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // beberapa section tidak punya id (bukan single-page scroller lagi
        // karena tiap halaman sudah punya URL sendiri di Astro), jadi dilewati saja
        if (!id) return;

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                let match = document.querySelector('header nav a[href*="' + id + '"]');
                if (match) match.classList.add('active');
            });
        }
    });

    // sticky header
    let header = document.querySelector('header');
    if (header) header.classList.toggle('sticky', window.scrollY > 100);
};

// mobile menu toggle (hamburger)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    // tutup menu ketika salah satu link diklik (khusus tampilan mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });
}
