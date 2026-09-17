/* =================================
   Education Scroll Animation
   ================================= */


   
const educationCards = document.querySelectorAll(".education-card");

const educationObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                educationObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.2
    }
);

educationCards.forEach((card) => {

    educationObserver.observe(card);

});