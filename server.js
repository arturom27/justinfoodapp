const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/tu_basedatos', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión a MongoDB establecida'))
    .catch(err => console.log('Error al conectar a MongoDB:', err));

// Rutas de ejemplo
app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});

// Escuchar en el puerto
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
