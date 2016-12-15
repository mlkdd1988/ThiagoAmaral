var mongoose = require('mongoose');
var TreinadorSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    time: String,
    salario: Number

});
module.exports = mongoose.model('Treinador', TreinadorSchema);
