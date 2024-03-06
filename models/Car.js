import mongoose from "mongoose";

// Como hacer un modelo con mongoose
// 1. Crear el esqueleto
// 2. Crear modelo, asignando un nombre
// 3.

const carSchema = new mongoose.Schema({
    // campo --> tipo de dato
    plate: String,
    model: String,
    brand: String,
    version: String,
    color: String,
    type: String,
    vin: String,
});

// Nota: El nombre que le vamos a dar al modelo debe ser primera letra en Mayuscula y en singular
// const Car = mongose.model('Car'), carSchema)

export default mongoose.model('Car', carSchema);