const adquiSc = require('../models/Adquisicion');
const histController = require('./historico-controller');

exports.createAdquisicion = async (req, res) => {
    try {
        const newAdqui = {
            presupuesto: req.body.presupuesto,
            unidadAd: req.body.unidadAd,
            tipBien: req.body.tipBien,
            cantidad: req.body.cantidad,
            valUnitario: req.body.valUnitario,
            valTotal: req.body.valTotal,
            fechAd: req.body.fechAd,
            proveedor: req.body.proveedor,
            documentacion: req.body.documentacion,
            estado: req.body.estado
        }
        let adquisicion = new adquiSc(newAdqui);
        await adquisicion.save();
        let fecha = new Date().toISOString().split('T')[0];
        let historico = {
            tipoMovimiento: "Registro",
            modificacion: "creacion",
            idAdquisicion: adquisicion._id,
            fecha: fecha
        }
        await histController.createHistorico(historico);
        res.send(adquisicion);
    } catch (err) {
        console.log("Error en crear adquisicion: " + err);
        res.status(404).json({ msg: "Error en crear adquisicion: " + err });
    }
}

exports.readAdquisiciones = async (req, res) => {
    try {
        let adquisiciones = await adquiSc.find({estado: "activo"});
        res.send(adquisiciones);
    } catch (err) {
        console.log("Error en leer adquisiciones: " + err);
        res.status(404).json({ msg: "Error en leer adquisiciones: " + err });
    }
}

exports.readEspecified = async(req, res) => {
    try{
        let adquisicion = await adquiSc.findById(req.params.id);
        if(!adquisicion){
            res.status(200).json({msg: "Adquisicion not found"});
        }else{
            res.send(adquisicion);
        }
    }catch(err){
        console.log("Error en leer especifico: " + err);
        res.status(404).json({ msg: "Error en leer especifico: " + err });
    }
}

exports.updateAdquisicion = async (req, res) => {
    try {
        let adquisicion = await adquiSc.findById(req.params.id);
        let acum = "";
        if(!adquisicion){
            res.status(200).json({msg: "Adquisicion no encontrada"});
        }else{
            if(adquisicion.presupuesto != req.body.presupuesto){
                acum += "Presupuesto de: " + adquisicion.presupuesto + " a " + req.body.presupuesto + ","
            }
            adquisicion.presupuesto = req.body.presupuesto;
            if(adquisicion.unidadAd != req.body.unidadAd){
                acum += "Unidad Administrativa de: " + adquisicion.unidadAd + " a " + req.body.unidadAd + ","
            }
            adquisicion.unidadAd = req.body.unidadAd;
            if(adquisicion.tipBien != req.body.tipBien){
                acum += "Tipo de bien de: " + adquisicion.tipBien + " a " + req.body.tipBien + ","
            }
            adquisicion.tipBien = req.body.tipBien;
            if(adquisicion.cantidad != req.body.cantidad){
                acum += "Cantidad de: " + adquisicion.cantidad + " a " + req.body.cantidad + ","
            }
            adquisicion.cantidad = req.body.cantidad;
            if(adquisicion.valUnitario != req.body.valUnitario){
                acum += "Valor unitario de: " + adquisicion.valUnitario + " a " + req.body.valUnitario + ","
            }
            adquisicion.valUnitario = req.body.valUnitario;
            if(adquisicion.valTotal != req.body.valTotal){
                acum += "Valor total de: " + adquisicion.valTotal + " a " + req.body.valTotal + ","
            }
            adquisicion.valTotal = req.body.valTotal;
            if(adquisicion.fechAd != req.body.fechAd){
                acum += "Fecha adquisicion de: " + adquisicion.fechAd + " a " + req.body.fechAd + ","
            }
            adquisicion.fechAd = req.body.fechAd;
            if(adquisicion.proveedor != req.body.proveedor){
                acum += "Proveedor de: " + adquisicion.proveedor + " a " + req.body.proveedor + ","
            }
            adquisicion.proveedor = req.body.proveedor;
            if(adquisicion.documentacion != req.body.documentacion){
                acum += "Documentacion de: " + adquisicion.documentacion + " a " + req.body.documentacion + ","
            }
            adquisicion.documento = req.body.documento;
            adquisicion.estado = req.body.estado;
            adquisicion = await adquiSc.findOneAndUpdate({_id: req.params.id}, adquisicion, {new: true});
            let historico = {
                tipoMovimiento: "actualizacion",
                modificacion: acum,
                idAdquisicion: adquisicion._id,
                fecha: new Date().toISOString().split('T')[0]
            }
            await histController.createHistorico(historico);
            res.json(adquisicion);
        }
    } catch (err) {
        console.log("Error en actualizar adquisicion: " + err);
        res.status(404).json({ msg: "Error en actualizar adquisicion: " + err });
    }
}

exports.desactivateAdquisicion = async(req, res) => {
    try{
        let adquisicion = await adquiSc.findById(req.params.id);
        console.log("Entro al deshabilitar con el id: " + req.params.id);
        if(!adquisicion){
            res.status(200).json({msg: "Adquisicion not found"});
        }else{
            adquisicion.estado = "deshabilitado";
            console.log("El nuevo estado: " + adquisicion.estado);
            adquisicion = await adquiSc.findOneAndUpdate({_id: req.params.id}, adquisicion, {new: true});
            res.send(adquisicion);
        }
    }catch(err){
        console.log("Error en actualizar adquisicion: " + err);
        res.status(404).json({ msg: "Error en desactivar adquisicion: " + err });
    }
}