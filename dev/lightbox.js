/* --- LIGHTBOX (gallerian kuvakatselu) --- */
// Luodaan katseluikkunan elementit dynaamisesti
const lightboxOverlay = document.createElement('div');
lightboxOverlay.classList.add('lightbox-overlay');

const lightboxImage = document.createElement('img');
lightboxImage.classList.add('lightbox-image');

const lightboxClose = document.createElement('button');
lightboxClose.classList.add('lightbox-close');
lightboxClose.innerHTML = '&times;'; // HTML-koodi X-merkille

// Kootaan ikkuna ja lisätään se bodyyn
lightboxOverlay.appendChild(lightboxImage);
lightboxOverlay.appendChild(lightboxClose);
document.body.appendChild(lightboxOverlay);

// Haetaan kaikki klikattavat kuvat
const triggers = document.querySelectorAll('.lightbox-trigger');

// Avaa katseluikkuna
triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        const imageSrc = e.target.getAttribute('src');
        const imageAlt = e.target.getAttribute('alt');

        lightboxImage.setAttribute('src', imageSrc);
        lightboxImage.setAttribute('alt', imageAlt);
        lightboxOverlay.classList.add('active');

        // Estetään sivun rullaus, kun ikkuna on auki
        document.body.style.overflow = 'hidden';
    });
});

// Sulje katseluikkuna
const closeLightbox = () => {
    lightboxOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Palautetaan rullaus
};

lightboxClose.addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', (e) => {
    // Suljetaan vain, jos klikataan taustaa, ei itse kuvaa
    if (e.target === lightboxOverlay) {
        closeLightbox();
    }
});

// Sulje Esc-näppäimellä
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxOverlay.classList.contains('active')) {
        closeLightbox();
    }
});