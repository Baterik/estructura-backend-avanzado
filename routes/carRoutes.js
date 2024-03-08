import express from "express";
import { createCar, deleteCar, getAllCars, getCarById, updateCar } from "../controllers/carController.js";

const carRoutes = express.Router();

carRoutes.route('/')
.post(createCar)
.get(getAllCars)

carRoutes.route('/:carId')
.get(getCarById)
.put(updateCar)
.delete(deleteCar)

//Asi quedó el código antes de optimizarlo
// carRoutes.post('/', createCar);
// carRoutes.get('/', getAllCars);
// carRoutes.get('//:carId', getCarById);
// carRoutes.put('//:carId', updateCar);
// carRoutes.delete('//:carId', deleteCar );

export default carRoutes