var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Treinador = require('../models/Treinador.js');

/* GET /time Listagem de usuários. */
router.get('/', function(req, res, next) {
  Treinador.find(function (err, treinador) {
    if (err) return next(err);
    res.json(treinador);
  });
});

/* POST /Treinador Cadastro de usuário */
router.post('/', function(req, res, next) {
  Treinador.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /Treinador/id  Lista filtrada por um usuário*/
router.get('/:id', function(req, res, next) {
  Treinador.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /Treinador/:id Salva a edição de usuário */
router.put('/:id', function(req, res, next) {
  Treinador.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /Treinador/:id Deletando o usuário a partir do id */
router.delete('/:id', function(req, res, next) {
  Treinador.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
