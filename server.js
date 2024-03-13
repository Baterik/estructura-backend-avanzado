//* Crear una API con express 
//* paso 1 import express
//* 2. Crear app con express
//*3. Usar el app.listen para abrir puertos
import {connect} from './config.js';
import express from 'express';
import carRoutes from './routes/carRoutes.js';
import bookRoutes from './routes/bookRoutes.js';

connect();

const api = express();

api.use(express.json());

api.listen(8000, ()=>{
    console.log('API corriendo en el puerto 8000');
});

//*string(nombre de la ruta)
api.get('/test', (req, res) => {
    res.send('Hola, la prueba funciona');
})

api.use('/cars', carRoutes);
api.use('/books', bookRoutes);