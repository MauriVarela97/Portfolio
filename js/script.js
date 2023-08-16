
    document.addEventListener("DOMContentLoaded", function () {
        const menuIcon = document.getElementById("menu-icon");
        const navbar = document.querySelector(".navbar");

        menuIcon.addEventListener("click", function () {
            navbar.classList.toggle("active");
        });

        // Cerrar el menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll(".navbar a");
        navLinks.forEach(link => {
            link.addEventListener("click", function () {
                navbar.classList.remove("active");
            });
        });
    });

