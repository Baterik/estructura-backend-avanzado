import express from 'express';
import {createBook} from '../controllers/bookController.js';


const bookRoutes = express.Router();

//*ToDo: Create book
bookRoutes.post('/', createBook);

//*ToDo: get book by id

export default bookRoutes;