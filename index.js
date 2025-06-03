const dotenv = require('dotenv');
const express = require('express');
const { conectDB } = require('./src/config/db');
const AutorRouter = require('./src/api/routes/autor.js');
const bookRouter = require('./src/api/routes/book.js');

conectDB();

const app = express();
app.use(express.json());
app.use("/api/v1/autores", AutorRouter);
app.use("/api/v1/books", bookRouter);
app.listen(3000, () => {
  console.log("http://localhost:3000/api/v1/");
});