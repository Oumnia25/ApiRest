const mongoose = require('mongoose');
require('dotenv').config();
const Book = require('../../api/models/book');
const libros = require('../book.seed');

const lanzarsemilla = async (req, res, next) => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Conectado a la base de datos");

    await Book.collection.drop();
    console.log("Colección eliminada");

    await Book.insertMany(libros);
    console.log("Libros insertados");
} catch (error) {
  console.log(error);
} finally {
  await mongoose.connection.close();
    console.log("Conexión cerrada");
}
};

lanzarsemilla();