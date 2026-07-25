/*==================================================
    DOXA SNS NAVIGATION
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const header = document.getElementById("header");
    const mobileToggle = document.querySelector(".mobile-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    let lastScroll = 0;

    /*====================================
        MOBILE MENU
    ====================================*/

    if (mobileToggle && navLinks) {

        mobileToggle.addEventListener("click", () => {

            navLinks.classList.toggle("show-menu");

            mobileToggle.classList.toggle("active");

            if (mobileToggle.classList.contains("active")) {

                mobileToggle.innerHTML =
                    '<i class="fas fa-times"></i>';

            } else {

                mobileToggle.innerHTML =
                    '<i class="fas fa-bars"></i>';

            }

        });

    }

    /*====================================
        CLOSE MENU WHEN LINK IS CLICKED
    ====================================*/

    navItems.forEach(link => {

        link.addEventListener("click", () => {

            if (navLinks) {

                navLinks.classList.remove("show-menu");

            }

            if (mobileToggle) {

                mobileToggle.classList.remove("active");

                mobileToggle.innerHTML =
                    '<i class="fas fa-bars"></i>';

            }

        });

    });

    /*====================================
        STICKY HEADER
    ====================================*/

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    updateHeader();

    /*====================================
        HIDE / SHOW HEADER
    ====================================*/

    window.addEventListener("scroll", () => {

        updateHeader();

        const currentScroll = window.pageYOffset;

        if (!header) return;

        if (currentScroll <= 0) {

            header.style.transform = "translateY(0)";

            return;

        }

        if (
            currentScroll > lastScroll &&
            currentScroll > 120
        ) {

            header.style.transform = "translateY(-100%)";

        } else {

            header.style.transform = "translateY(0)";

        }

        lastScroll = currentScroll;

    });

    /*====================================
        ACTIVE NAVIGATION
    ====================================*/

    const sections = document.querySelectorAll("section[id]");

    function activateMenu() {

        const scrollY = window.pageYOffset;

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 120;

            const sectionHeight =
                section.offsetHeight;

            const id = section.getAttribute("id");

            const link = document.querySelector(
                `.nav-links a[href="#${id}"]`
            );

            if (!link) return;

            if (
                scrollY >= sectionTop &&
                scrollY < sectionTop + sectionHeight
            ) {

                navItems.forEach(item =>
                    item.classList.remove("active")
                );

                link.classList.add("active");

            }

        });

    }

    activateMenu();

    window.addEventListener("scroll", activateMenu);

    /*====================================
        SMOOTH SCROLL
    ====================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (!target) return;

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        });

    });

});