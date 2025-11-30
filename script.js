document.addEventListener('DOMContentLoaded', function() {
    // 1. Footer (Año Actual)
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    // 2. Lógica de Filtrado de Catálogo
    const filterTabs = document.querySelector('.filter-tabs');
    const productGrid = document.querySelector('.product-grid');

    if (filterTabs && productGrid) {
        filterTabs.addEventListener('click', function(e) {
            if (e.target.classList.contains('tab-btn')) {
                // Remueve la clase 'active' de todos los botones
                document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
                
                // Añade la clase 'active' al botón clickeado
                e.target.classList.add('active');

                const filter = e.target.getAttribute('data-filter');
                
                // Itera sobre todos los productos y los oculta/muestra
                document.querySelectorAll('.product-card').forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'flex'; // Muestra el producto
                    } else {
                        card.style.display = 'none'; // Oculta el producto
                    }
                });
            }
        });
    }

    // Inicializa mostrando todos los productos
    if (document.querySelector('.tab-btn.active')) {
        document.querySelector('.tab-btn.active').click();
    }
});