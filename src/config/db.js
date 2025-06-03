const moongose = require('mongoose');

const conectDB = async () => {
  try {
    await moongose.connect(process.env.DB_URL);
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { conectDB };