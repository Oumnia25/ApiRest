const mongoose = require('mongoose'); 
const Book = require('../models/book.js');

const getBooks = async (req, res, next) => {
try {
  const allBooks = await Book.find().populate('autor');
  return res.status(200).json(allBooks);
} catch (error) {
  return res.status(500).json({ mensaje: "Error algo va mal", error: error.message });
}
};

const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id).populate('autor');
    return res.status(200).json(book);
   }
    catch (error) {
      return res.status(500).json({ mensaje: "Error algo va mal", error: error.message });
    }
  };


    const createBook = async (req, res, next) => {
      try {
        const { titulo, autor, genero, año, editorial } = req.body;
        const newBook = await Book.create({ titulo, autor, genero, año, editorial });
        return res.status(200).json(newBook);
      } catch (error) {
        return res.status(500).json({ mensaje: "Error algo va mal", error: error.message });
      }
    };

    const updateBook = async (req, res, next) => {
      try {
        const { id } = req.params;
        const { titulo, autor, genero, año, editorial } = req.body;
        const updatedBook = await Book.findByIdAndUpdate(id, { titulo, autor, genero, año, editorial }, { new: true });
        return res.status(200).json(updatedBook);
      } catch (error) {
        return res.status(500).json({ mensaje: "Error algo va mal", error: error.message });
      }
    };
   

    const deleteBook = async (req, res, next) => {
      try {
        const { id } = req.params; 
        const deletedBook = await Book.findByIdAndDelete(id);
        return res.status(200).json(deletedBook); }
      catch (error) {
        return res.status(500).json({ mensaje: "Error algo va mal", error: error.message });
      }
    };



module.exports = {getBooks, getBookById, createBook, updateBook, deleteBook};

