const Dispositivo = require("../models/Dispositivo");
const { param } = require("../routes/dispositivo");
const mongoose = require('mongoose');


exports.actualizaEstadoLed = async (req, res) => {
  try {


    const { led,deviceName } = req.body;
    console.log("led=>",led)
    console.log("deviceName=>",deviceName)
    // Verificar si led es un número válido (0 o 1)
    if (typeof led !== 'number' || (led !== 0 && led !== 1)) {
      return res.status(400).json({ mensaje: 'El valor de LED debe ser 0 o 1' });
    }


    
    // Actualizar el estado del LED en la base de datos
    await Dispositivo.findOneAndUpdate(
      { 'led' :led ,'deviceName':deviceName},{ $set: { 'led': led } }, // Objeto de actualización
      { new: true }   // Actualizar el valor del LED con el valor recibido
    );

//    console.log(req.body);// esto permite mostrar los resultados del json /    res.status(201).json(resultado);
  
    res.status(200).json({ mensaje: 'Estado del LED actualizado correctamente del dispositivo'+deviceName});
  } catch (error) {
    console.error('Error al actualizar el estado del LED:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

exports.actualizaEstadoValancin = async (req, res) => {
  try {
    const { valancin } = req.body;
console.log("valancin=>",valancin)
    // Verificar si led es un número válido (0 o 1)
    if (typeof valancin !== 'number' || (valancin !== 0 && valancin !== 1)) {
      return res.status(400).json({ mensaje: 'El valor de LED debe ser 0 o 1' });
    }

    // Actualizar el estado del LED en la base de datos
    await Dispositivo.findOneAndUpdate(
      { 'valancin' :valancin } // Actualizar el valor del LED con el valor recibido
    );

//    console.log(req.body);// esto permite mostrar los resultados del json /    res.status(201).json(resultado);
  
    res.status(200).json({ mensaje: 'Estado del valancin actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar el estado del valancin:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};


exports.actualizaEstadoCarrucel = async (req, res) => {
  try {
    const { carrucel } = req.body;
console.log("carrucel=>",carrucel)
    // Verificar si led es un número válido (0 o 1)
    if (typeof carrucel !== 'number' || (carrucel !== 0 && carrucel !== 1)) {
      return res.status(400).json({ mensaje: 'El valor de carrucel debe ser 0 o 1' });
    }

    // Actualizar el estado del LED en la base de datos
    await Dispositivo.findOneAndUpdate(
      { 'carrucel' :carrucel } // Actualizar el valor del LED con el valor recibido
    );

//    console.log(req.body);// esto permite mostrar los resultados del json /    res.status(201).json(resultado);
  
    res.status(200).json({ mensaje: 'Estado del carrucel actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar el estado del carrucel:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};




exports.actualizaEstadoMusica = async (req, res) => {
  try {
    const { musica } = req.body;
console.log("musica=>",musica)
    // Verificar si led es un número válido (0 o 1)
    if (typeof musica !== 'number' || (musica !== 0 && musica !== 1)) {
      return res.status(400).json({ mensaje: 'El valor de musica debe ser 0 o 1' });
    }

    // Actualizar el estado del LED en la base de datos
    await Dispositivo.findOneAndUpdate(
      { 'musica' :musica } // Actualizar el valor del LED con el valor recibido
    );

//    console.log(req.body);// esto permite mostrar los resultados del json /    res.status(201).json(resultado);
  
    res.status(200).json({ mensaje: 'Estado del musica actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar el estado del musica:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};



exports.actualizaEstadoTemperatura = async (req, res) => {
  try {
    const { temperatura, humedad } = req.body; // Obtener temperatura y humedad de los parámetros de la consulta

    // Actualizar la temperatura y la humedad en la base de datos
    await Dispositivo.findOneAndUpdate({}, { "temperatura": temperatura, "humedad": humedad });

    res.status(200).json({ mensaje: 'Datos de temperatura y humedad actualizados correctamente' });
  } catch (error) {
    console.error('Error al actualizar los datos de temperatura y humedad:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
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



exports.estadoValancin = async (req, res) => {
    try {
        
        const dispositivo = await Dispositivo.findOne().sort({ led: -1 });

        res.send(dispositivo.valancin.toString());
    } catch (error) {
        console.error('Error al obtener el estado del Valancin:', error);
        res.status(500).send('Error al obtener el estado del valancin');
    }
};


exports.estadoCarrucel = async (req, res) => {
    try {
        
        const dispositivo = await Dispositivo.findOne().sort({ valancin: -1 });

        res.send(dispositivo.carrucel.toString());
    } catch (error) {
        console.error('Error al obtener el estado del Carrucel:', error);
        res.status(500).send('Error al obtener el estado del Carrucel');
    }
};

exports.estadoMusica = async (req, res) => {
    try {
        
        const dispositivo = await Dispositivo.findOne().sort({ carrucel: -1 });

        res.send(dispositivo.musica.toString());
    } catch (error) {
        console.error('Error al obtener el estado del musica:', error);
        res.status(500).send('Error al obtener el estado del musica');
    }
};




exports.estadoHumedadTemperatura = async (req, res) => {
  try {

    
    // Consultar la temperatura más reciente en la base de datos
    const dispositivo = await Dispositivo.findOne().sort({ fechaCreacion: -1 });

    // Devolver la temperatura obtenida como respuesta
    res.status(200).json({ temperatura: dispositivo.temperatura,humedad: dispositivo.humedad });
  } catch (error) {

    console.error('Error al obtener la temperatura y  humedad:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });

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




exports.crearDispositivo = async (req, res) => {
  try {
    // Crear una nueva instancia de Dispositivo con datos vacíos
     // Obtener los datos del cuerpo de la solicitud
    //  const { deviceName, deviceLabel } = req.body;

    // const producto=new Producto()

     // Crear una nueva instancia de Dispositivo con los datos proporcionados
     const nuevoDispositivo = new Dispositivo({
       deviceName: req.body.deviceName,
       deviceLabel: req.body.deviceLabel,
       userId: req.body.userId
     });
 
    // const nuevoDispositivo = new Dispositivo();

    // Guardar el nuevo dispositivo en la base de datos
    const resultado = await nuevoDispositivo.save();
    // Enviar una respuesta al cliente con el resultado
    res.status(200).json(resultado);
  } catch (error) {
    console.error('Error al crear el producto:',error);
    res.status(500).send("Ocurrió un error al guardar el dispositivo");
  }
};


exports.encontrarDispositivosByUsuarioId = async (req, res) => {
  try {
    // Obtiene el usuarioId de los parámetros de la URL
    const usuarioId = req.params.usuarioId;

    // Realiza la búsqueda de dispositivos por el userId proporcionado
    const dispositivos = await Dispositivo.find({ userId: usuarioId });

    // Devuelve los dispositivos encontrados como respuesta JSON
    res.json(dispositivos);
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir
    console.error('Error al encontrar dispositivos por usuario ID:', error);
    res.status(500).json({ error: 'Error al encontrar dispositivos por usuario ID' });
  }
};
