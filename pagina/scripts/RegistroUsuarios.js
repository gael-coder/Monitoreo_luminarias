 /*----------------------------------------------------------------------------
                                REGISTRO DE USUARIOS PARA EL MERO MERO
 ------------------------------------------------------------------------------*/ 
 // Manejar el envío del formulario
        document.getElementById('registroForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Evitar el envío del formulario

            // Obtener los valores de los campos
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Validar que las contraseñas coincidan
            if (password !== confirmPassword) {
                mostrarMensaje('Las contraseñas no coinciden.', 'error');
                return;
            }

            // Simular el registro (aquí podrías enviar los datos a un servidor)
            const usuario = {
                nombre,
                email,
                password
            };

            // Mostrar mensaje de éxito
            mostrarMensaje('Usuario registrado correctamente.', 'success');

            // Limpiar el formulario
            document.getElementById('registroForm').reset();
        });

        // Función para mostrar mensajes
        function mostrarMensaje(mensaje, tipo) {
            const mensajeDiv = document.getElementById('mensaje');
            mensajeDiv.textContent = mensaje;
            mensajeDiv.className = `text-center ${tipo === 'error' ? 'text-danger' : 'text-success'}`;
        }
