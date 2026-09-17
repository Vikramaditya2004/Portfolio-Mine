document.addEventListener("DOMContentLoaded", () => {

    const headerContainer = document.getElementById("header");

    if (!headerContainer) return;

    fetch("header.html")
        .then(response => {

            if (!response.ok) {
                throw new Error("Unable to load header.html");
            }

            return response.text();

        })
        .then(html => {

            // Insert common header
            headerContainer.innerHTML = html;

            // IMPORTANT:
            // Run menu code AFTER header is inserted
            initNavigation();

        })
        .catch(error => {

            console.error("Header error:", error);

        });

});


function initNavigation() {

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.querySelector(".main-navigation");

    if (!menuBtn || !nav) {
        console.error("Mobile menu elements not found.");
        return;
    }


    // =========================
    // MOBILE MENU TOGGLE
    // =========================

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (nav.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

            menuBtn.setAttribute("aria-label", "Close menu");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuBtn.setAttribute("aria-label", "Open menu");

        }

    });


    // =========================
    // CLOSE MENU AFTER CLICK
    // =========================

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });


    // =========================
    // ACTIVE PAGE
    // =========================

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    nav.querySelectorAll("a").forEach(link => {

        const href = link.getAttribute("href");

        if (!href) return;

        const linkPage =
            href.split("/").pop().split("#")[0];

        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });

}