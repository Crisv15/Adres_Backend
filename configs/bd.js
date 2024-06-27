const mongoose = require('mongoose');

require('dotenv').config({path: 'variables.env'});

const conexion = async () => {
    try{
        await mongoose.connect(process.env.db_adquisiciones, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conected to " + mongoose.modelNames);
    }catch(err){
        console.log("Error en: " + err);
        process.exit(1); // Para que se detenga la app
    }
}

module.exports = conexion;