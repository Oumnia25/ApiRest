const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  titulo: {type: String,required: true, trim: true},
  autor : {type: mongoose.Schema.Types.ObjectId, ref: 'Autor', required: true},
  genero : {type: String, required: true, trim: true, enum: ["Ficción", "No ficcion", "Fantasia", "Ciencia", "Romance", "Thriller"] },
  año : {type: Number, required: true},
  editorial : {type: String, required: true, trim: true},
}, 
{timestamps: true,
  collection: 'books'
}
);

const Book = mongoose.model('books', BookSchema, 'books');
module.exports = Book;