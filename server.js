const express = require('express');
const app = express();
const conexion = require('./configs/bd')
const cors = require('cors');

//Conexion a base de datos mongo
conexion();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hola mundo");
})

app.use('/api/gestionAdquisicion', require('./routes/adquisicion-route'));

app.listen(3002, () => {
    console.log('Server listening on port 3002');
});