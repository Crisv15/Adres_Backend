const express = require('express');
const router = express.Router();
const adController = require('../controllers/adquisicion-controller');

router.post('/createAdquisicion', adController.createAdquisicion);
router.get('/readAquicisiones', adController.readAdquisiciones);

module.exports = router;