import Book from "../models/Book.js";
import Author from "../models/Author.js";

const createBook = async (req, res)=> {
    try {
        /**
         * 1. Registrar Authors en la DB
         * 2. Registrar Book con esos Authors
         */
        const { authors, book } = req.body; /**Esta deconstruyendo el obj */
                
        if (!Array.isArray(authors) || !book) {
            return res.status(400).json({
                msg: 'Body incorrecto'
            });
        }
        
        /**[obj] -> [promesas] */
        const authorPromises = authors.map((elem) =>{
            return Author.create(elem);
        });

        const authorModels = await Promise.all(authorPromises);

        /** [models] -> [ids] */

        const authorIds = authorModels.map((model) => { 
            return model.id;
        });

        book.authors = authorIds;

        const newBook = await Book.create(book);

        return res.json(newBook);
    } catch (error) {
        res.status(500).json({
            msg: 'Error al crera Book',
            error,
        });        
    }
};
// const createBook = async (req, res) => {
//     try {
//     /**
//      * req.bodyñ{
//      * author[]
//      * book
//      * }
//      * 1. crear autores
//      * 2. crear el libro
//      */
//     let authorsData = req.body.authors;
//     const bookData = req.body.book;

//     if (!authorsData || !bookData) {
//         res.status(400).json({
//             msg: 'authorsData or bookData missing',
//         });
//     }

//     if (!Array.isArray(authorsData)) {
//         res.status(400).json({
//             msg: 'authorsData must be an array'
//         });
//     }

//     /**
//      * Crear Autores
//      * [objetos] -> [Schemas]
//      * primero objeto -> schema
//      */
//     authorsData = authorsData.map((author) => {
//         return new Author(author);
//     });

//     /**Crear un libro con autores */

//     const newBook = await Book.create({
//         genre: bookData.genre,
//         isbn: bookData.isbn,
//         title: bookData.title,
//         year: bookData.year,
//         authors: authorsData,
//     });

//     res.json(newBook);
//     } catch (error) {
//         res.status(500).json({
//             msg: 'Error al crear Book',
//             error,
//         });
//     }    
// };

const getBookById = async (req, res) =>{
    try {
        //*Buscar un libro por Id
        const book = await Book.findById(re.params.bookId).populate('authors');

        if (!book) {
                return res.status(404).json({
                msg: 'Libro no encontrado'
            });            
        }

        //* Responder el libro
        res.json(book);
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al buscar el libro por Id',
            error,
        });
    }
};

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        if (!books) {
            return res.status(404).json({
                msg: 'Libros no encontrados',
            });
        }
        return res.json(books);
    } catch (error) {
        res.status(500).json({
            msg: 'Error al buscar todos los libros',
            error,
        });        
    }
};


export { createBook, getBookById, getAllBooks };