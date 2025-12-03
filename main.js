/* ===================================================
   MAIN.JS - Script general para todas las páginas
=================================================== */

/* ===============================
   Footer: Año dinámico
   Aplicable a todas las páginas
=============================== */
document.addEventListener("DOMContentLoaded", () => {
    const yearElem = document.getElementById("year");
    if (yearElem) {
        yearElem.textContent = new Date().getFullYear();
    }
});

/* ===============================
   Detectar página actual y marcar navbar
   Muestra la página actual en consola y marca el enlace activo
=============================== */
document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname; // ruta completa
    const page = path.substring(path.lastIndexOf("/") + 1); // nombre del archivo HTML
    console.log("Página actual:", page); // consola para referencia

    // Marcar enlace activo en la navbar
    const navLinks = document.querySelectorAll(".topnav ul li a");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === page) {
            link.classList.add("active");
        }
    });
});

/* ===============================
   Página Recursos: Cargar PDF dinámicamente
   Uso: loadPDF('ruta/a/archivo.pdf');
=============================== */
function loadPDF(pdfPath) {
    const viewer = document.querySelector(".pdf-viewer");
    if (viewer) {
        viewer.src = pdfPath;
    }
}

/* ===============================
   Página Contacto: Abrir WhatsApp
   Uso: openWhatsApp('593988847802', 'Hola quiero más información');
=============================== */
function openWhatsApp(number, message) {
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

/* ===============================
   Funciones generales futuras
   Aquí puedes agregar animaciones, sliders, u otras interacciones
=============================== */
// Ejemplo: animación de cards al hacer scroll (opcional)
// function animateCards() {
//     const cards = document.querySelectorAll('.card');
//     cards.forEach(card => {
//         // agregar lógica de animación
//     });
// }
