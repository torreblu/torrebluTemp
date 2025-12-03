/* ===================================================
   SCRIPT GENERAL DEL SITIO
=================================================== */

/* ===================================================
   Footer: Año dinámico
   Se aplica en todas las páginas
=================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const yearElem = document.getElementById("year");
    if (yearElem) {
        yearElem.textContent = new Date().getFullYear();
    }

    /* ===================================================
       Navbar: Marcar automáticamente la página activa
    ==================================================== */
    const currentPage = location.pathname.split("/").pop();
    const links = document.querySelectorAll(".topnav a");
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    /* ===================================================
       Menú hamburguesa: Mostrar/ocultar enlaces en móviles
    ==================================================== */
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".topnav ul");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }
});

/* ===================================================
   Función para cargar PDFs dinámicamente (página Recursos)
=================================================== */
function loadPDF(pdfPath) {
    const viewer = document.querySelector(".pdf-viewer");
    if (viewer) {
        viewer.src = pdfPath;
    }
}

/* ===================================================
   Función para abrir WhatsApp (página Contacto)
=================================================== */
function openWhatsApp(number, message) {
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

/* ===================================================
   Espacio para futuras funciones generales
   Ej: sliders, animaciones, interacciones
=================================================== */
