const histSc = require('../models/Historico');

exports.createHistorico = async (req, res) => {
    try{
        let historico = new histSc(req);
        historico.save();
        console.log("Se creo eol registro");
    }catch(err){
        console.log("Error en crear hisotrico: " + err);
    }
}

exports.readHistorial = async (req, res) => {
    try{
        let historico = await histSc.find();
        res.json(historico);
    }catch(err){
        console.log("Error en leer hisotrico: " + err);
    }
}

exports.readEspecifiedHistorial = async (req, res) => {
    try{
        let historico = await histSc.find({idAdquisicion: req.params.id});
        res.json(historico);
    }catch(err){
        console.log("Error en leer historico especifico: " + err);
    }
}