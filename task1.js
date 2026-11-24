
// ==========================================
// TECH INNOVATORS
// PREMIUM WEBSITE JAVASCRIPT
// ==========================================


// ELEMENTS

const navbar = document.getElementById("navbar");

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

const navItems = document.querySelectorAll(".nav-link");

const sections = document.querySelectorAll("section[id]");

const backToTop = document.getElementById("back-to-top");


// ==========================================
// MOBILE NAVIGATION
// ==========================================

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';

});


// CLOSE MENU WHEN NAVIGATION LINK IS CLICKED

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

    });

});


// CLOSE MENU WHEN CLICKING OUTSIDE

document.addEventListener("click", event => {

    const clickedInsideMenu =
        navLinks.contains(event.target);

    const clickedToggle =
        menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {

        navLinks.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

    }

});


// ==========================================
// ACTIVE NAVIGATION
// ==========================================

function updateActiveNavigation() {

    let currentSection = "home";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection = section.id;

        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

function updateNavbar() {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(8, 13, 25, 0.97)";

        navbar.style.boxShadow =
            "0 8px 30px rgba(0, 0, 0, 0.25)";

    } else {

        navbar.style.background =
            "rgba(11, 16, 32, 0.88)";

        navbar.style.boxShadow = "none";

    }

}


// ==========================================
// BACK TO TOP BUTTON
// ==========================================

function updateBackToTop() {

    if (window.scrollY > 450) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==========================================
// SCROLL EVENT
// ==========================================

window.addEventListener("scroll", () => {

    updateActiveNavigation();

    updateNavbar();

    updateBackToTop();

});


// ==========================================
// INITIAL PAGE SETUP
// ==========================================

window.addEventListener("DOMContentLoaded", () => {

    updateActiveNavigation();

    updateNavbar();

    updateBackToTop();

});


// ==========================================
// RESPONSIVE MENU RESET
// ==========================================

window.addEventListener("resize", () => {

    if (window.innerWidth > 850) {

        navLinks.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

    }

});
