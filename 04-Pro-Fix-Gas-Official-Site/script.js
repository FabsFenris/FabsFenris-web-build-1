document.addEventListener("DOMContentLoaded", () => {

    /* ==============================
       MOBILE MENU
    ============================== */
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");
            menuToggle.classList.toggle("active");
        });
    }

    /* ==============================
       FAQ ACCORDION
    ============================== */
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        if (question) {
            question.addEventListener("click", () => {
                const isActive = item.classList.contains("active");

                // Close all accordion items first
                faqItems.forEach(i => i.classList.remove("active"));

                // If it wasn't active, open the clicked one
                if (!isActive) {
                    item.classList.add("active");
                }
            });
        }
    });

    /* ==============================
       BACK TO TOP BUTTON
    ============================== */
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                backToTop.style.display = "flex";
                backToTop.style.alignItems = "center";
                backToTop.style.justifyContent = "center";
            } else {
                backToTop.style.display = "none";
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /* ==============================
       HEADER SCROLL EFFECT
    ============================== */
    const header = document.querySelector(".header");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.style.background = "rgba(8, 27, 58, 0.95)";
                header.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
            } else {
                header.style.background = "rgba(255, 255, 255, 0.18)";
                header.style.boxShadow = "none";
            }
        });
    }

    /* ==============================
       SMOOTH SCROLL & MENU AUTO-CLOSE
    ============================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            if (targetId && targetId !== "#") {
                const target = document.querySelector(targetId);

                if (target) {
                    e.preventDefault();

                    // Close mobile menu if open when a link is clicked
                    if (navLinks && navLinks.classList.contains("show")) {
                        navLinks.classList.remove("show");
                        if (menuToggle) menuToggle.classList.remove("active");
                    }

                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    /* ==============================
       SCROLL REVEAL ANIMATION
    ============================== */
    const revealElements = document.querySelectorAll(
        ".service-card, .feature-card, .product-card, .gallery-item, .testimonial-card, .contact-card"
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });

});
