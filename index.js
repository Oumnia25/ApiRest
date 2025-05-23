require('dotenv').config();
const express = require('express');
const nodemon = require('nodemon');
const { conectDB } = require('./src/config/db');
const app = express();
const AutorRouter = require('./src/api/routes/autor.js');
const bookRouter = require('./src/api/routes/book.js');

conectDB();

app.use(express.json());
app.use("/api/v1/autores", AutorRouter);
app.use("/api/v1/books", bookRouter);
app.listen(3000, () => {
  console.log("http://localhost:3000/api/v1/");
});