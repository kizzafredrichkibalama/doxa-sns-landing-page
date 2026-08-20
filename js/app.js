/*==================================================
    DOXA SNS APP
    Main Application
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 DOXA SNS Landing Page Loaded");

    /*=========================================
        PRELOADER
    =========================================*/

    const preloader = document.querySelector(".preloader");

    if (preloader) {

        window.addEventListener("load", () => {

            preloader.classList.add("hide");

            setTimeout(() => {

                preloader.remove();

            }, 600);

        });

    }

    /*=========================================
        SCROLL PROGRESS BAR
    =========================================*/

    const progress = document.createElement("div");

    progress.id = "scroll-progress";

    document.body.appendChild(progress);

    window.addEventListener("scroll", () => {

        const totalHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progressHeight =
            (window.pageYOffset / totalHeight) * 100;

        progress.style.width = progressHeight + "%";

    });

    /*=========================================
        BACK TO TOP BUTTON
    =========================================*/

    const topButton = document.createElement("button");

    topButton.id = "backToTop";

    topButton.innerHTML =
        '<i class="fas fa-arrow-up"></i>';

    document.body.appendChild(topButton);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 600) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /*=========================================
        NAVBAR ACTIVE BUTTON
    =========================================*/

    document.querySelectorAll(".btn-primary").forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "translateY(-4px) scale(1.03)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "";

        });

    });

    /*=========================================
        PARALLAX HERO
    =========================================*/

    const hero = document.querySelector(".hero");

    if (hero) {

        window.addEventListener("scroll", () => {

            hero.style.backgroundPositionY =
                window.pageYOffset * 0.4 + "px";

        });

    }

    /*=========================================
        FADE NAVIGATION AFTER CLICK
    =========================================*/

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            document.querySelector(".nav-links")
                ?.classList.remove("show-menu");

        });

    });

    /*=========================================
        IMAGE LAZY LOADING
    =========================================*/

    const lazyImages =
        document.querySelectorAll("img");

    const imageObserver =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const img = entry.target;

                if (img.dataset.src) {

                    img.src = img.dataset.src;

                }

                imageObserver.unobserve(img);

            });

        });

    lazyImages.forEach(img => {

        imageObserver.observe(img);

    });

    /*=========================================
        HERO CTA EFFECT
    =========================================*/

    const heroButtons =
        document.querySelectorAll(".hero-buttons a");

    heroButtons.forEach(btn => {

        btn.addEventListener("click", () => {

            console.log("SNS CTA Clicked");

        });

    });

    /*=========================================
        RANDOM GRADIENT BLOBS
    =========================================*/

    document.querySelectorAll(".gradient")
        .forEach(blob => {

            setInterval(() => {

                blob.style.opacity =
                    0.12 + Math.random() * 0.1;

            }, 2500);

        });

    /*=========================================
        PERFORMANCE
    =========================================*/

    window.addEventListener("resize", () => {

        console.log("Viewport:", window.innerWidth);

    });

});