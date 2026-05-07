// ===============================
// PORTFOLIO WEBSITE SCRIPT
// ===============================

// Smooth Active Navbar Highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .cert-card, .contact-card"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("show");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===============================
// Contact Form Validation
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {

        if (input.value.trim() === "") {
            valid = false;
            input.style.border = "1px solid red";
        } else {
            input.style.border = "none";
        }

    });

    if (valid) {

        alert("Message Sent Successfully 🚀");

        form.reset();

    } else {

        alert("Please fill all fields properly.");

    }

});

// ===============================
// Typing Effect Hero Text
// ===============================

const heroTitle = document.querySelector(".hero h2");

const textArray = [
    "Computer Engineering Student",
    "Data Analytics Enthusiast",
    "Python Developer",
    "Future Data Scientist"
];

let textIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {

    currentText = textArray[textIndex];

    if (!isDeleting) {

        heroTitle.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        heroTitle.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            textIndex++;

            if (textIndex === textArray.length) {
                textIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);

}

typeEffect();

// ===============================
// Scroll To Top Button
// ===============================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.classList.add("scroll-top-btn");

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===============================
// Dynamic Footer Year
// ===============================

const footer = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footer.innerHTML =
    `© ${currentYear} Tejas Anand Nathe | Built with passion and consistency 🚀`;

// ===============================
// Console Message 😭
// ===============================

console.log(
    "%cWelcome to Tejas Portfolio 🚀",
    "color:#38bdf8; font-size:20px; font-weight:bold;"
);
