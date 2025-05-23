
const Book = require('../models/book.js');

const getBooks = async (req, res, next) => {
try {
  const allBooks = await Book.find().populate('autor');
  return res.status(200).json(allBooks);
} catch (error) {
  return res.status(404).json(("Error algo va mal", error.message));
}
}

const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id).populate('autor');
    return res.status(200).json(book);
   }
    catch (error) {
      return res.status(404).json("Error algo va mal");
    }}


    const createBook = async (req, res, next) => {
      try {
        const { titulo, autor, genero, año, editorial } = req.body;
        const newBook = await Book.create({ titulo, autor, genero, año, editorial });
        return res.status(200).json(newBook);
      } catch (error) {
        return res.status(404).json("Error algo va mal");
      }
    };

    const updateBook = async (req, res, next) => {
      try {
        const { id } = req.params;
        const { titulo, autor, genero, año, editorial } = req.body;
        const updatedBook = await Book.findByIdAndUpdate(id, { titulo, autor, genero, año, editorial }, { new: true });
        return res.status(200).json(updatedBook);
      } catch (error) {
        return res.status(404).json("Error algo va mal");
      }
    };
   

    const deleteBook = async (req, res, next) => {
      try {
        const { id } = req.params; 
        const deletedBook = await Book.findByIdAndDelete(id);
        return res.status(200).json(deletedBook); }
      catch (error) {
        return res.status(404).json("Error algo va mal");
      }}



module.exports = {getBooks, getBookById, createBook, updateBook, deleteBook};

