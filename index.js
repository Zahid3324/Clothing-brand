const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

// Header Animations
ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header_btns", {
    ...scrollRevealOption,
    delay: 1500,
});

// Brands Animation
ScrollReveal().reveal(".brands_bar h2", {
    ...scrollRevealOption,
    interval: 200,
});

// Catalogue Animations
ScrollReveal().reveal(".catalogue_card", {
    ...scrollRevealOption,
    interval: 500,
});

// Young's Favourite Animation
ScrollReveal().reveal(".youngs_card", {
    ...scrollRevealOption,
    interval: 500,
});

// App Download Section
ScrollReveal().reveal(".favourite_image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".favourite_content", {
    ...scrollRevealOption,
    origin: "left",
});

// Newsletter Animation
ScrollReveal().reveal(".newsletter_container h2", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".newsletter_container p", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".newsletter_container form", {
    ...scrollRevealOption,
    delay: 1000,
});