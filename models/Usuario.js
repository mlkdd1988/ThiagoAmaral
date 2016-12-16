var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  perfil:{
  	 nome:String
  },
  cep: Number,
  endereco: String,
  login:String,
  senha:String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
