/*-----------------------------------------------------------------------------------------
            INICIO SCRIPT PARA EL DISEÑO DE LOS NODOS Y DEL OFFCANVAS
    -------------------------------------------------------------------------------------------*/
// Verificar si el elemento #map existe en la página actual
if (document.getElementById('map')) {
    // Coordenadas del centro del mapa
    setTimeout(() => {
        map.invalidateSize();
    }, 500);

    var center = [25.446102, -100.993699]; // tec saltillo boilot

    // Inicializar el mapa
    var map = L.map('map').setView(center, 20);

    // Añadir capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

    //generar el contenido un poco mas optimizado
    function generarContenido(location) {
        return `
            <div class="row">
                <div class="col-12">
                    <h3 class="textoEstado">Estado: ${location.estado}</h3>
                </div>
            </div>
            <div class="filaOffCanvas row">
                <div class="col-12">
                    <h4 class="textoLuminaria">Consumo de energía: ${location.consumoEnergia}</h4>
                </div>
            </div>
            <div class="filaOffCanvas row">
                <div class="col-12">
                    <h4 class="textoLuminaria">PM2.5: ${location.pm25}</h4>
                </div>
            </div>
            <div class="filaOffCanvas row">
                <div class="col-12">
                    <h4 class="textoLuminaria">PM10: ${location.pm10}</h4>
                </div>
            </div>
            <div class="filaOffCanvas row">
                <div class="col-12">
                    <h4 class="textoLuminaria">Ruido: ${location.ruido}</h4>
                </div>
            </div>
            <div class="filaOffCanvas row">
                <div class="col-6">
                    <img src="${location.imagen}" alt="${location.title}">
                </div>
                <div id="foco" class="col-6 style="margin: 0 auto;">
                    
                </div>
            </div>

            <div class="filaOffCanvas row">
                <div class="col-12 text-center">
                    <div class="mt-3">
                        <button id="encender" type="button" class="btnEncApa btn">ENCENDER</button>
                        <button id="apagar" type="button" class="btnEncApa btn">APAGAR</button>
                    </div>
                </div>
            </div>
        `;
    }

    // Cargar la animación desde un JSON local
   // Espera a que se abra el offcanvas para cargar la animación
document.getElementById('offcanvasExample').addEventListener('shown.bs.offcanvas', () => {
    // Cargar la animación desde un JSON local
    fetch('./foco.json') // Ruta relativa al archivo JSON 
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(data => {
            const focoAnimacion = lottie.loadAnimation({
                container: document.getElementById('foco'), // Contenedor HTML
                renderer: 'svg', // Formato de renderizado
                loop: false, // No repetir la animación
                autoplay: false, // No iniciar automáticamente
                animationData: data // JSON cargado localmente
            });

            // Controlar la animación con los botones (se asegura de que existan)
            const btnEncender = document.getElementById('encender');
            const btnApagar = document.getElementById('apagar');

            if (btnEncender && btnApagar) {
                btnEncender.addEventListener('click', () => focoAnimacion.play());
                btnApagar.addEventListener('click', () => focoAnimacion.stop());
            } else {
                console.warn('Botones de encender/apagar no encontrados.');
            }
        })
        .catch(error => {
            console.error('Error al cargar el JSON:', error);
        });
});


    // Array de ubicaciones con contenido personalizado
    var locations = [
        {
            coords: [25.445075, -100.994251], //1
            title: "LUMINARIA #1",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen

        },
        {
            coords: [25.445275, -100.994087], // 2
            title: "LUMINARIA #2",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen

        },
        {
            coords: [25.445483, -100.994484], //3
            title: "Luminaria #3",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen

        },
        {
            coords: [25.445512, -100.994066], //4
            title: "Luminaria #4",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen

        },
        {
            coords: [25.445668, -100.994107], //5
            title: "Luminaria #5",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen

        },
        {
            coords: [25.445581, -100.993702], //6
            title: "Luminaria #6",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen

        },
        {
            coords: [25.445869, -100.994110], //7
            title: "Luminaria #7",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen

        },
        {
            coords: [25.445906, -100.994139], //8
            title: "Luminaria #8",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen

        },
        {
            coords: [25.445947, -100.994509], //9
            title: "Luminaria #9",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen

        },
        {
            coords: [25.445886, -100.994008], //10
            title: "Luminaria #10",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen

        },
        {
            coords: [25.445881, -100.993900], //11
            title: "Luminaria #11",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen

        },
        {
            coords: [25.445865, -100.993745], //12
            title: "Luminaria #12",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen

        },
        {
            coords: [25.445891, -100.993605], //13
            title: "Luminaria #13",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen

        },
        {
            coords: [25.445915, -100.993396], //14
            title: "Luminaria #14",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen

        },
        {
            coords: [25.445954, -100.993310], //15
            title: "Luminaria #15",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen
        },
        {
            coords: [25.446257, -100.993270], //16
            title: "Luminaria #16",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen
        },
        {
            coords: [25.445993, -100.993793], //17
            title: "Luminaria #17",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen
        },
        {
            coords: [25.446138, -100.993839], //18
            title: "Luminaria #18",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen
        },
        {
            coords: [25.446138, -100.993718], //19
            title: "Luminaria #19",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen
        },
        {
            coords: [25.446296, -100.993678], //20
            title: "Luminaria #20",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen
        },
        {
            coords: [25.446505, -100.993791], //21
            title: "Luminaria #21",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen
        },
        {
            coords: [25.446554, -100.993944], //22
            title: "Luminaria #22",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen
        },
        {
            coords: [25.446791, -100.993708], //23
            title: "Luminaria #23",
            estado: "Bueno",
            consumoEnergia: "100 kWh", // Datos dinámicos
            pm25: "15 µg/m³",
            pm10: "25 µg/m³",
            ruido: "65 dB",
            imagen: "https://via.placeholder.com/400x200", // URL de la imagen
        }
    ];

    // variable icono con tamaño y todo waos jajajaja
    var icono = L.icon({
        iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });

    // Añadir marcadores con animación
    locations.forEach(function (location) {
        var marker = L.marker(location.coords, { icon: icono }).addTo(map);

        // Evento al pasar el mouse sobre el marcador
        marker.on('mouseover', function () {
            marker.setIcon(L.icon({
                iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png',
                iconSize: [29, 47], // Tamaño aumentado (1.15 veces el original)
                iconAnchor: [14, 47],
            }));
        });

        // Evento al quitar el mouse del marcador
        marker.on('mouseout', function () {
            marker.setIcon(icono); // Restaurar el ícono original
        });

        // Evento de clic para mostrar el offcanvas
        marker.on('click', function () {
            document.getElementById('offcanvasExampleLabel').innerText = location.title;
            document.getElementById('offcanvasBody').innerHTML = generarContenido(location);

            var offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasExample'));
            offcanvas.show();
        });
    });
}
/*-----------------------------------------------------------------------------------------
        FIN SCRIPT PARA EL DISEÑO DE LOS NODOS Y DEL OFFCANVAS
-------------------------------------------------------------------------------------------*/