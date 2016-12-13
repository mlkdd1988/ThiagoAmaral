var mongoose = require('mongoose');

var TimeSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    hino: String,
    qtdeTorcedores: Number,
    nomeDoMascote: String,
    valorPatrimonio: Number
});

module.exports = mongoose.model('Time', TimeSchema);
