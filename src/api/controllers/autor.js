const mongoose = require('mongoose'); 
const Autor = require('../models/autor.js');

   const getAutor = async (req, res, next) => {
    try {
    const allAutores = await Autor.find().populate('libros');
    return res.status(200).json(allAutores);
    } catch (error) {
    return res.status(500).json({ mensaje: "Error algo va mal", error: error.message });
    }
   };

    const getAutorById = async (req, res, next) => {
    try {
    const { id } = req.params;
    const autor = await Autor.findById(id).populate('libros');
    return res.status(200).json(autor);}
     catch (error) {
    return res.status(500).json({ mensaje: "Error algo va mal", error: error.message });
    }
    };
    
    const createAutor = async (req, res, next) => {
      try {
        const { nombre, apellidos, nacimiento, nacionalidad, libros } = req.body;
        const newAutor = await Autor.create({ nombre, apellidos, nacimiento, nacionalidad, libros });
        return res.status(200).json(newAutor);
      } catch (error) {
        return res.status(500).json({ mensaje: "Error algo va mal", error: error.message });
      }
    };

    const updateAutor = async (req, res, next) => {
      try {
        const { id } = req.params;
        const { nombre, apellidos, nacimiento, nacionalidad, libros } = req.body;
        const updateData = { nombre, apellidos, nacimiento, nacionalidad };

        if (libros && Array.isArray(libros) && libros.length > 0) {
          updateData.$addToSet = { libros: { $each: libros } };
        }
    
        const updatedAutor = await Autor.findByIdAndUpdate(id, updateData, { new: true });
        return res.status(200).json(updatedAutor);
      } catch (error) {
        return res.status(500).json({ mensaje: "Error algo va mal", error: error.message });
      }
    };
    
    const deleteAutor = async (req, res, next) => {
        try {
          const { id } = req.params; 
          const deletedAutor = await Autor.findByIdAndDelete(id);
          return res.status(200).json(deletedAutor); }
        catch (error) {
          return res.status(500).json({ mensaje: "Error algo va mal", error: error.message });
      }
    };

module.exports = {getAutor, getAutorById, createAutor, updateAutor, deleteAutor};
