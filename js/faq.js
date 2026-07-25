/*==================================================
    DOXA SNS FAQ ACCORDION
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".faq-item");

    if (!faqItems.length) return;

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = question.querySelector("i");

        // Set initial height
        if(item.classList.contains("active")){
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.classList.replace("fa-plus","fa-minus");
        }else{
            answer.style.maxHeight = null;
        }

        question.addEventListener("click", () => {

            const isOpen = item.classList.contains("active");

            // Close all items
            faqItems.forEach(faq => {

                faq.classList.remove("active");

                const a = faq.querySelector(".faq-answer");
                const i = faq.querySelector(".faq-question i");

                a.style.maxHeight = null;

                i.classList.remove("fa-minus");
                i.classList.add("fa-plus");

            });

            // Open current item
            if(!isOpen){

                item.classList.add("active");

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

                icon.classList.remove("fa-plus");
                icon.classList.add("fa-minus");

            }

        });

        // Accessibility
        question.addEventListener("keydown",(e)=>{

            if(e.key==="Enter" || e.key===" "){

                e.preventDefault();

                question.click();

            }

        });

    });

});