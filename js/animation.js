/*==================================================
    DOXA SNS LANDING PAGE ANIMATIONS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
      REVEAL ON SCROLL
    =========================================*/

    const revealElements = document.querySelectorAll(`
        .section,
        .trust-card,
        .feature-card,
        .ecosystem-card,
        .timeline-card,
        .team-card,
        .security-card,
        .phase,
        .hero-content,
        .hero-card,
        .chart-card
    `);

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    revealElements.forEach(el => {

        el.classList.add("reveal");

        observer.observe(el);

    });

    /*=========================================
      STAGGER CARD ANIMATION
    =========================================*/

    const grids = document.querySelectorAll(

        ".trust-grid, .features-grid, .ecosystem-grid, .timeline, .team-grid, .security-grid, .roadmap-grid"

    );

    grids.forEach(grid => {

        [...grid.children].forEach((card, index) => {

            card.style.transitionDelay = `${index * 0.12}s`;

        });

    });

    /*=========================================
      PARALLAX BLOBS
    =========================================*/

    const blobs = document.querySelectorAll(".gradient");

    window.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;

        blobs.forEach((blob, index) => {

            const speed = (index + 1) * 15;

            blob.style.transform =
                `translate(${x * speed}px, ${y * speed}px)`;

        });

    });

    /*=========================================
      BUTTON RIPPLE
    =========================================*/

    document.querySelectorAll(".btn-primary").forEach(button => {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            ripple.className = "ripple";

            const rect = this.getBoundingClientRect();

            ripple.style.left = (e.clientX - rect.left) + "px";
            ripple.style.top = (e.clientY - rect.top) + "px";

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 700);

        });

    });

    /*=========================================
      HERO CARD FLOAT
    =========================================*/

    const heroCard = document.querySelector(".hero-card");

    if (heroCard) {

        window.addEventListener("mousemove", e => {

            const x = (e.clientX / window.innerWidth - .5) * 20;
            const y = (e.clientY / window.innerHeight - .5) * 20;

            heroCard.style.transform =

                `rotateY(${x}deg) rotateX(${-y}deg)`;

        });

        window.addEventListener("mouseleave", () => {

            heroCard.style.transform =

                "rotateY(0deg) rotateX(0deg)";

        });

    }

    /*=========================================
      COUNTER ANIMATION
    =========================================*/

    const counters = document.querySelectorAll(".hero-stats h3");

    counters.forEach(counter => {

        const value = counter.innerText;

        if (isNaN(parseInt(value))) return;

        const target = parseInt(value);

        let current = 0;

        const step = target / 40;

        function animate() {

            current += step;

            if (current >= target) {

                counter.innerText = target;

                return;

            }

            counter.innerText = Math.floor(current);

            requestAnimationFrame(animate);

        }

        animate();

    });

});

