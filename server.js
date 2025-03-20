const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir archivos estáticos desde las carpetas correctas
app.use('/htmls', express.static(path.join(__dirname, 'public', '1-htmls')));
app.use('/csss', express.static(path.join(__dirname, 'public', '2-css_s')));
app.use('/scripts', express.static(path.join(__dirname, 'public', '3-scripts')));
app.use('/Segunda_mitad', express.static(path.join(__dirname, 'public', 'Segunda_mitad')));
app.use('/imagenes', express.static(path.join(__dirname, 'public', 'imagenes')));

// Ruta para manejar la petición al índice (HTML)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '1-htmls', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
