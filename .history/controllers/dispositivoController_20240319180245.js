const Dispositivo = require("../models/Dispositivo");
const { param } = require("../routes/dispositivo");


exports.actualizaEstadoLed = async (req, res) => {
  const { id } = req.params;
  const led = parseInt(req.body); // Convertir el cuerpo de la solicitud a un entero

  console.log('Cuerpo de la solicitud:', req.body);

  try {
    // Buscar el dispositivo por ID
    const dispositivo = await Dispositivo.findById(id);
console.log()
    if (!dispositivo) {
      return res.status(404).json({ mensaje: 'Dispositivo no encontrado' });
    } // Actualizar el estado del LED
    dispositivo.led = led;
    
    // Guardar los cambios en la base de datos
    await dispositivo.save();

    return res.status(200).json({ mensaje: 'Estado del LED actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar el estado del LED:', error);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

// Endpoint para obtener el estad
exports.estadoled = async (req, res) => {
    try {
        // Consultar el estado actual del LED en la base de datos
        const dispositivo = await Dispositivo.findOne().sort({ fechaCreacion: -1 });

        // Devolver solo el estado del LED como respuesta
        res.send(dispositivo.led.toString());
    } catch (error) {
        console.error('Error al obtener el estado del LED:', error);
        res.status(500).send('Error al obtener el estado del LED');
    }
};


exports.obtenerDispositivos = async (req, res) => {
  try {
    const dispositivos = await Dispositivo.find();
    res.json(dispositivos);
  } catch {
    console.log("error");
  }
}