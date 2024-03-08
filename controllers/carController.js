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

    try{
        const newCar = await Car.create(req.body);
    res.json(newCar);
    } catch (error){
        res.json({
            msg: 'Error al crear car', error});
    }    
};

// Read
//Get all cars
const getAllCars = async (req, res) => {
    const cars = await Car.find({
        isDeleted: false,
    });
    res.json(cars);
}
//Get bar by id
const getCarById = async (req, res) => {    
    const car = await Car.findById(req.params.carId)
    res.json(car);
};

// Update
const updateCar = async (req, res) => {
    const { carId } = req.params;
    //1. El primer filtro, 2. nuevos campos
    const updatedCar = await Car.updateOne(
        {
        _id: carId
        },
        req.body);
        res.json(updatedCar);

    // const newCar = await Car.findByIdAndUpdate(req.params.carId, req.body)
};
// Delete

const deleteCar = async (req, res) => {
    // const deletedCar = await Car.findByIdAndDelete(req.params.carId);
    // res.json(deletedCar);

    //Busque un carro por su Id y cambie el campo isDeleted a true
    const deletedCar = await Car.findByIdAndUpdate(
        //Id a buscar
        req.params.carId, 
        
        //Objeto nuevo
        {
            isDeleted: true,
        },

        //Opciones para que muestre el objeto despues del borrado
        {
            new: true,
        });
        res.json(deletedCar);
}

export { createCar, getAllCars, getCarById, updateCar, deleteCar };