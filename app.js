const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint POST para agregar canción
app.post('/agregarCancion', (req, res) => {
    const { nombre, artista, album } = req.body;
    const cancion = { nombre, artista, album };
    res.status(201).json({ mensaje: 'Canción creada', cancion });
});


// Endpoint GET para obtener nombre y carnet
app.get('/verInformacion', (req, res) => {
    res.json({ nombre: 'TuNombre', carnet: 'TuCarnet' });
});

app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});


// Endpoint GET para obtener nombre y carnet
app.get('/verInformacion', (req, res) => {
    res.json({ nombre: 'TuNombre', carnet: 'TuCarnet' });
});

app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});