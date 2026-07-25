/*==================================================
    DOXA TOKENOMICS CHART
===================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("tokenChart");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // DFINITY Gradient

    const gradient = ctx.createLinearGradient(0, 0, 400, 400);

    gradient.addColorStop(0, "#29ABE2");
    gradient.addColorStop(0.35, "#6C63FF");
    gradient.addColorStop(0.70, "#EC008C");
    gradient.addColorStop(1, "#F7931E");

    // Chart

    const tokenChart = new Chart(ctx, {

        type: "doughnut",

        data: {

            labels: [

                "DAO Treasury",

                "SNS Sale",

                "Foundation",

                "Team",

                "Early Contributors"

            ],

            datasets: [{

                data: [

                    90,

                    3,

                    3,

                    3,

                    1

                ],

                backgroundColor: [

                    gradient,

                    "#6C63FF",

                    "#EC008C",

                    "#F7931E",

                    "#111111"

                ],

                borderColor: "#ffffff",

                borderWidth: 5,

                hoverOffset: 15,

                borderRadius: 8

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            cutout: "72%",

            animation: {

                animateRotate: true,

                animateScale: true,

                duration: 2200,

                easing: "easeOutQuart"

            },

            plugins: {

                legend: {

                    display: false

                },

                tooltip: {

                    backgroundColor: "#111",

                    titleColor: "#fff",

                    bodyColor: "#fff",

                    cornerRadius: 12,

                    padding: 16,

                    callbacks: {

                        label: function (context) {

                            return `${context.label}: ${context.raw}%`;

                        }

                    }

                }

            }

        }

    });

    // Hover animation

    canvas.addEventListener("mousemove", () => {

        canvas.style.cursor = "pointer";

    });

});