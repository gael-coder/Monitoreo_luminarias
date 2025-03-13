/*----------------------------------------------------------------------------
                    DROP PARA LA PARTE SUPERIOR DE LA PAGINA
 ------------------------------------------------------------------------------*/ 
// Selecciona el elemento del dropdown
const dropdownHover = document.getElementById('dropdownHover');

// Selecciona el menú dropdown
const dropdownMenu = dropdownHover.querySelector('.dropdown-menu');

// Abre el dropdown cuando el mouse entra
dropdownHover.addEventListener('mouseenter', () => {
    const dropdown = new bootstrap.Dropdown(dropdownHover.querySelector('.dropdown-toggle'));
    dropdown.show(); // Muestra el dropdown
});

// Cierra el dropdown cuando el mouse sale
dropdownHover.addEventListener('mouseleave', () => {
    const dropdown = new bootstrap.Dropdown(dropdownHover.querySelector('.dropdown-toggle'));
    dropdown.hide(); // Oculta el dropdown
});