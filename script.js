// SIDETRACKED homepage behavior

// Smooth scrolling for in-page anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");
        const target = targetId ? document.querySelector(targetId) : null;

        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Footer year
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}
