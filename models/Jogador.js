var mongoose = require('mongoose');
var JogadorSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    time: String
});
module.exports = mongoose.model('Jogador', JogadorSchema);
