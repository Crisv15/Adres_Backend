const mongoose = require('mongoose');

const AdquisicionSchema = mongoose.Schema({
    presupuesto: {
        type: Number,
        required: true,
        trim: true
    },
    unidadAd: {
        type: String, 
        trim: true,
        required: true
    },
    tipBien: {
        type: String,
        trim: true,
        required: true
    },
    cantidad: {
        type: Number,
        trim: true,
        required: true
    },
    valUnitario: {
        type: Number,
        trim: true,
        required: true
    },
    valTotal: {
        type: Number,
        trim: true
    },
    fechAd:{
        type: Date,
        trim: true,
        required: true
    },
    proveedor: {
        type: String,
        trim: true,
        required: true
    },
    documento: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Adquisicion", AdquisicionSchema);