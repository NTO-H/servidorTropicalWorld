
//   // Ruta agregarPolitica
// const { Politica, Pregunta} = require("../models/Privado"); // Assuming models/Privado.js is in the same directory

// //   const Pregunta = require("../models/Pregunta");
  

// exports.agregarPolitica = async (req, res) => {
//   try{


//     const politica = new Politica(req.body);
//     const resultado = await politica.save(); // Corrección aquí
//     res.status(200).send(resultado);
  

//    console.log(req.body);// esto permite mostrar los resultados del json /    res.status(201).json(resultado);
  
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Ocurrió un error al agregar politica");
//   }
// };





// exports.getPoliticas = async (req, res) => {
//     try {
//       const politica = await Politica.find();
//       res.json(politica);
//     } catch {
//       console.log("error");
//     }
//   }
//   //
//   //
 
  
// exports.agregarPregunta = async (req, res) => {
//   try{


//     const pregunta = new Pregunta(req.body);
//     const resultado = await pregunta.save(); // Corrección aquí
//     res.status(200).send(resultado);
  

//    console.log(req.body);// esto permite mostrar los resultados del json /    res.status(201).json(resultado);
  
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Ocurrió un error al agregar politica");
//   }
// };

// // getPoliticas




// exports.getPreguntas = async (req, res) => {
//     try {
//       const pregunta = await Pregunta.find();
//       res.json(pregunta);
//     } catch {
//       console.log("error");
//     }
//   };


//   exports.actualizarPregunta = async (req, res) => {
//     try {
//       const { titulo, contenido } = req.body;
//       let pregunta = await Pregunta.findById(req.params.id);
//       if (!pregunta) {
//         return res.status(404).json({ msg: 'No existe la pregunta' }); // Devolver respuesta y salir del controlador
//       }
//       pregunta.titulo = titulo;
//       pregunta.contenido = contenido;
  
//       pregunta = await Pregunta.findOneAndUpdate({ _id: req.params.id }, pregunta, { new: true });
//       return res.json(pregunta); // Devolver respuesta y salir del controlador
//     } catch (error) {
//       console.error(error);
//       return res.status(500).send('Hubo un error'); // Devolver respuesta y salir del controlador
//     }
//   };
  

// exports.obtenerPregunta = async (req, res) => {
//   try {
//     let pregunta = await Pregunta.findById(req.params.id);
//     if (!pregunta) {
//       res.status(404).json({ msg: 'No existe la pregunta' });
//     }
//     pregunta = await Pregunta.findOneAndUpdate({ _id: req.params.id }, pregunta, { new: true });
//     res.json(pregunta);
//   } catch (error) {
//     res.status(500).send('hubo un error');
//   }
// }


// exports.eliminarPregunta = async (req, res) => {
//   try {
//     let pregunta = await Pregunta.findById(req.params.id);

//     if (!pregunta) {
//       res.status(404).json({ msg: 'No existe la pregunta' });
//     }
    
//     await Pregunta.findOneAndDelete({ _id: req.params.id });
//     res.json({ msg: 'pregunta eliminado con exito' });
    
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('ocurrio un error');
//   }
// }

// // politica


  
// exports.actualizarPolitica = async (req, res) => {
//   try {
//     const { titulo, contenido } = req.body;
//     let politica = await Politica.findById(req.params.id);
//     if (!politica) {
//       return   res.status(404).json({ msg: 'No existe la politica' });
//     }
//     politica.titulo = titulo;
//     politica.contenido = contenido;

//     politica = await Politica.findOneAndUpdate({ _id: req.params.id }, politica, { new: true });
//     return res.json(politica);
//   } catch (error) {
//     res.status(500).send('hubo un error');
//   }
  
// }

// exports.obtenerPolitica = async (req, res) => {
//   try {
//     let politica = await Politica.findById(req.params.id);
//     if (!politica) {
//       res.status(404).json({ msg: 'No existe la politica' });
//     }
//     politica = await Politica.findOneAndUpdate({ _id: req.params.id }, politica, { new: true });
//     res.json(politica);
//   } catch (error) {
//     res.status(500).send('hubo un error');
//   }
// }

// exports.eliminarPolitica = async (req, res) => {
//   try {
//     let politica = await Politica.findById(req.params.id);

//     if (!politica) {
//       res.status(404).json({ msg: 'No existe la politica' });
//     }
    
//     await Politica.findOneAndDelete({ _id: req.params.id });
//     res.json({ msg: 'politica eliminado con exito' });
    
    
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('ocurrio un error');
//   }
// }

