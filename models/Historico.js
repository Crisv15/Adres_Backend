const mongoose = require('mongoose');

const HistoricoSchema = mongoose.Schema({
    tipoMovimiento: {
        type: String,
        trim: true,
        required: true
    },
    modificacion: {
        type: String,
        trim: true
    },
    idAdquisicion: {
        type: mongoose.Types.ObjectId,
        ref: 'AdquisicionSchema'
    },
    fecha: {
        type: String,
        required: true,
        trim: true
    }
}, {
    tmestamps: true
})

module.exports = mongoose.model("Historico", HistoricoSchema);