/* ===================================================
   SCRIPT GENERAL
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
   Página Recursos: Cargar PDF dinámicamente
=============================== */
function loadPDF(pdfPath) {
    const viewer = document.querySelector(".pdf-viewer");
    if (viewer) {
        viewer.src = pdfPath;
    }
}

/* ===============================
   Página Contacto: Abrir WhatsApp
=============================== */
function openWhatsApp(number, message) {
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

/* ===============================
   Funciones generales futuras
   Aquí puedes agregar animaciones, sliders, u otras interacciones
=============================== */
