// ===============================
// SKATEBOARD WEBSITE - SCRIPT.JS
// ===============================


// MOBILE MENU
const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}


// PRODUCT FILTERING
const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        const category = button.dataset.category;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        products.forEach(product => {

            const productCategory = product.dataset.category;

            if (
                category === "all" ||
                productCategory === category
            ) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });
});


// CART COUNTER
let cartCount = 0;

const cartCounter = document.querySelector("#cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        if (cartCounter) {
            cartCounter.textContent = cartCount;
        }

        button.textContent = "Added ✓";

        setTimeout(() => {
            button.textContent = "Add to Cart";
        }, 1200);

    });

});


// PRODUCT IMAGE HOVER
const productImages = document.querySelectorAll(".product-card img");

productImages.forEach(image => {

    image.addEventListener("mouseenter", () => {
        image.style.transform = "scale(1.05)";
    });

    image.addEventListener("mouseleave", () => {
        image.style.transform = "scale(1)";
    });

});


// SCROLL REVEAL
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealItems.forEach(item => {
    revealObserver.observe(item);
});


// HEADER SCROLL EFFECT
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// RANDOM SKATE MESSAGE
const skateMessages = [
    "Push harder.",
    "Stay rolling.",
    "Skate everything.",
    "Built for the streets.",
    "Support your local skate scene."
];

const messageElement = document.querySelector("#skate-message");

if (messageElement) {

    const randomMessage =
        skateMessages[
            Math.floor(Math.random() * skateMessages.length)
        ];

    messageElement.textContent = randomMessage;
}


// FOOTER YEAR
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}
