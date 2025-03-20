/*-----------------------------------------------------------------------------------------
            INICIO SCRIPT PARA EL DISEÑO DE LOS NODOS Y DEL OFFCANVAS
    -------------------------------------------------------------------------------------------*/
// Verificar si el elemento #map existe en la página actual
if (document.getElementById('mapPrinc')) {
    // Coordenadas del centro del mapa (puedes cambiarlas)
    var center = [25.446102, -100.993699]; // tec saltillo boilot

    // Inicializar el mapa
    var mapPrinc = L.map('mapPrinc').setView(center, 20); // 20 es el nivel de zoom

    // Añadir capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(mapPrinc);

    // Añadir un solo marcador
    var marker = L.marker(center).addTo(mapPrinc);

    // Ajustar el tamaño del mapa después de un retraso (opcional)
    setTimeout(() => {
        mapPrinc.invalidateSize();
    }, 500);
}