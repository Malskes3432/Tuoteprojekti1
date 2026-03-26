/* --- HAMPURILAISVALIKKO --- */
const menuBtn = document.querySelector(".mobile-menu-btn");
const nav = document.querySelector(".main-nav");
const menuImg = menuBtn?.querySelector("img");

menuBtn?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", isOpen);

    // Vaihdetaan valikon kuvake tilan mukaan
    if (isOpen) {
        menuImg.src = "graphics/menu_close.svg";
    } else {
        menuImg.src = "graphics/menu.svg";
    }
});

/* --- PALAA YLÖS -NUOLIPAINIKE --- */
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    // Tarkistetaan rullaus ja elementin olemassaolo
    if (window.scrollY > 300) {
        backToTop?.classList.add('show');
    } else {
        backToTop?.classList.remove('show');
    }
});