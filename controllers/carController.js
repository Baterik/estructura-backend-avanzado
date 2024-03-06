// Create
// diferencias entre una Function y Arrow funtion
import Car from "../models/Car.js";

const createCar = async (req, res) => {
        // brand: 'Nissan',
        // carType: 'Sedan',
        // color: 'red',
        // model: 'Tsuru',
        // plate: '123-ABC',
        // vin: '981UY29E8USH129',
        // version: 'GSR 200'
    const newCar = await Car.create(req.body);
    res.json(newCar);
};

// Read
// Update
// Delete

export {createCar};