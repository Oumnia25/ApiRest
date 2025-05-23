const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutorSchema = new Schema({
  nombre: { type: String, required: true, trim: true },
  apellidos: { type: String, required: true, trim: true },
  nacimiento: { type: Date, required: true },
  nacionalidad: { type: String, required: true, trim: true },
  libros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'books' }],
}, { timestamps: true, collection: 'autores' });

const Autor = mongoose.model('Autor', AutorSchema, 'autores');
module.exports = Autor;