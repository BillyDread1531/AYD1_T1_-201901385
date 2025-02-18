app.post("/agregarCancion", (req, res) => {
    const { nombre, artista, genero } = req.body;

    if (!nombre || !artista || !genero) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const nuevaCancion = { nombre, artista, genero };
    canciones.push(nuevaCancion);

    res.status(201).json({
        mensaje: "Canción agregada exitosamente",
        cancion: nuevaCancion
    });
});
