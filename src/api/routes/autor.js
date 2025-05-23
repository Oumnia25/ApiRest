const AutorRouter = require('express').Router();
const { getAutor, getAutorById, createAutor, updateAutor, deleteAutor } = require('../controllers/autor.js');

AutorRouter.get('/', getAutor);
AutorRouter.get('/:id', getAutorById); 
AutorRouter.post('/', createAutor);
AutorRouter.put('/:id', updateAutor);
AutorRouter.delete('/:id', deleteAutor);

module.exports = AutorRouter;