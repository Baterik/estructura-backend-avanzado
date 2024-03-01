//* Crear una API con express 
//* paso 1 import express
//* 2. Crear app con express
//*3. Usar el app.listen para abrir puertos
import {connect} from './config.js';
import express from 'express';

connect();

const api = express();

api.listen(8000, ()=>{
    console.log('API corriendo en el puerto 8000');
});
