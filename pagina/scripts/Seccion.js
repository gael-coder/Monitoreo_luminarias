/*------------------------------------------------------------------------------- 
                            SCRIPT PARA EL CAMBIO DE SECCION EN MONITOREO
----------------------------------------------------------------------------------*/
// Función para mostrar la sección correspondiente
function mostrarSeccion(seccionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.seccion').forEach(function(seccion) {
      seccion.classList.remove('activa');
    });

    // Mostrar la sección seleccionada
    const seccion = document.getElementById(seccionId);
    if (seccion) {
      seccion.classList.add('activa');
    }

    // Remover la clase 'activo' de todos los botones
    document.querySelectorAll('.btnMonitoreo').forEach(function(boton) {
        boton.classList.remove('activo');
    });

    // Agregar la clase 'activo' al botón correspondiente
    const botonActivo = document.querySelector(`.btnMonitoreo[data-seccion="${seccionId}"]`);
    if (botonActivo) {
        botonActivo.classList.add('activo');
    }
  }

  // Función para manejar el cambio de sección según el fragmento de URL
  function manejarFragmentoURL() {
    const hash = window.location.hash.substring(1); // Obtener el fragmento de URL (sin el #)

    // Validar el fragmento de URL
    if (hash && (hash === 'graficas' || hash === 'registros')) {
      mostrarSeccion(hash); // Mostrar la sección correspondiente
    } else {
      mostrarSeccion('graficas'); // Mostrar la sección de gráficas por defecto
      window.location.hash = 'graficas'; // Actualizar el fragmento de URL
    }
  }

  // Manejar el cambio de sección al cargar la página
  window.addEventListener('load', manejarFragmentoURL);

  // Manejar el cambio de sección al cambiar el fragmento de URL
  window.addEventListener('hashchange', manejarFragmentoURL);

  // Manejar el cambio de sección al hacer clic en los botones
  document.querySelectorAll('.btnMonitoreo').forEach(function(boton) {
    boton.addEventListener('click', function() {
      const seccionId = this.getAttribute('data-seccion');
      window.location.hash = seccionId; // Actualizar el fragmento de URL
    });
  });