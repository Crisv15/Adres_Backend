const express = require('express');
const router = express.Router();
const adController = require('../controllers/adquisicion-controller');
const histCont = require('../controllers/historico-controller')

router.post('/createAdquisicion', adController.createAdquisicion);
router.get('/readAquicisiones', adController.readAdquisiciones);
router.put('/updateAdquisicion/:id', adController.updateAdquisicion);
router.get('/read/:id', adController.readEspecified);
router.put('/desactivate/:id', adController.desactivateAdquisicion)
router.get('/historial', histCont.readHistorial)
router.get('/readEspecifiedHistorial/:id', histCont.readEspecifiedHistorial)

module.exports = router;