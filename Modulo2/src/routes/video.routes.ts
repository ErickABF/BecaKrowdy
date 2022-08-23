import { Response, } from 'restify';
import { Router, } from 'restify-router';
import videoController from '../controllers/video.controller';

const router = new Router();

/* router.get('/execute', async (req, res): Promise<Response> => {
  try {
    await videoController.executeProcessToBuildReel()
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
}); */

router.get('/ffmpeg', async (req, res): Promise<Response> => {
  try {
    await videoController.testingFfmpeg()
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});

router.post('/cutvideo', async (req, res): Promise<Response> => {
  try {
    const {nameVideo, startTime, endTime, numberCpusAvailables} = req.body
    await videoController.cutVideo(nameVideo, startTime, endTime, numberCpusAvailables)
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});
router.post('/cutvideos', async (req, res): Promise<Response> => {
  try {
    const {startTime, endTime, numberCpusAvailables} = req.body
    await videoController.cutVideos(startTime, endTime, numberCpusAvailables)
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});

router.post('/descargarvideos', async (req, res): Promise<Response> => {
  try {
    const {name_archivo} = req.body
    await videoController.downloadvid(name_archivo)
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});

router.post('/datos', async (req, res): Promise<Response> => {
  try {
    const {nombre_pagina, limite} = req.body
    await videoController.datos(nombre_pagina, limite)
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});
router.post('/agregarfondo', async (req, res): Promise<Response> => {
  try {
    const {nombre_video} = req.body
    await videoController.agregarfondo(nombre_video)
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});
router.post('/agregarfondos', async (req, res): Promise<Response> => {
  try {
    await videoController.agregarfondos()
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});
router.post('/datosaunir', async (req, res): Promise<Response> => {
  try {
    await videoController.datosaunir()
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});
router.post('/unirvideos', async (req, res): Promise<Response> => {
  try {
    const {archivo_nombre}= req.body
    await videoController.unirvideos(archivo_nombre)
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});
router.post('/uploadvideo', async (req, res): Promise<Response> => {
  try {
    const {nombre_video, titulo, descripcion, palabrasclave, categoria, privacidad}= req.body
    await videoController.uploadvideo(nombre_video, titulo, descripcion, palabrasclave, categoria, privacidad)
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});

export default router;