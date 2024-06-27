const adquiSc = require('../models/Adquisicion');

exports.createAdquisicion = async(req, res) => {
    try{
        const newAdqui = {
            presupuesto: req.body.presupuesto,
            unidadAd: req.body.unidadAd,
            tipBien: req.body.tipBien,
            cantidad: req.body.cantidad,
            valUnitario: req.body.valUnitario,
            valTotal: req.body.valTotal,
            fechAd: req.body.fechAd,
            proveedor: req.body.proveedor,
            documentacion: req.body.documentacion
        }
        let adquisicion = new adquiSc(newAdqui);
        await adquisicion.save();
        res.send(adquisicion);
    }catch(err){
        console.log("Error en crear adquisicion: " + err);
        res.status(404).json({msg: "Error en crear adquisicion: " + err});
    }
}

exports.readAdquisiciones = async(req, res) => {
    try{
        let adquisiciones = await adquiSc.find();
        res.send(adquisiciones);
    }catch(err){
        console.log("Error en leer adquisiciones: " + err);
        res.status(404).json({msg: "Error en leer adquisiciones: " + err});
    }
}