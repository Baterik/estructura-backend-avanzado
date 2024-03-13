import Book from "../models/Book.js";
import Author from "../models/Author.js";

const createBook = async (req, res)=> {
    
    try {

    /**
     * req.bodyñ{
     * author[]
     * book
     * }
     * 1. crear autores
     * 2. crear el libro
     */
    let authorsData = req.body.authors;
    const bookData = req.body.book;

    if (!authorsData || !bookData) {
        res.status(400).json({
            msg: 'authorsData or bookData missing',
        });
    }

    if (!Array.isArray(authorsData)) {
        res.status(400).json({
            msg: 'authorsData must be an array'
        });
    }

    /**
     * Crear Autores
     * [objetos] -> [Schemas]
     * primero objeto -> schema
     */
    authorsData = authorsData.map((author) => {
        return new Author(author);
    });

    /**Crear un libro con autores */

    const newBook = await Book.create({
        genre: bookData.genre,
        isbn: bookData.isbn,
        title: bookData.title,
        year: bookData.year,
        authors: authorsData,
    });

    res.json(newBook);
    } catch (error) {
        res.status(500).json({
            msg: 'Error al crear Book',
            error,
        });
    }    
};


export {createBook};