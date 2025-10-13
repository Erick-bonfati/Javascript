// AQUI FICA A MODELAGEM DOS DADOS QUE SERÃO ENVIADOS AO MONGODB

const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  titulo: {type: String, required: true},
  descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;