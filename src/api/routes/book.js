const bookRouter = require('express').Router();
const { getBooks, getBookById, createBook, updateBook, deleteBook } = require('../controllers/book.js');

bookRouter.get('/', getBooks);
bookRouter.get('/:id', getBookById);
bookRouter.post('/', createBook);
bookRouter.put('/:id', updateBook);
bookRouter.delete('/:id', deleteBook);

module.exports = bookRouter;