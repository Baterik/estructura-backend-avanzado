import express from 'express';
import {createBook, getBookById, getAllBooks} from '../controllers/bookController.js';


const bookRoutes = express.Router();

//*ToDo: Create book
bookRoutes.post('/', createBook);

//*ToDo: get book by id
bookRoutes.get('/:bookId', getBookById);

//ToDo get all books
bookRoutes.get('/', getAllBooks)

export default bookRoutes;