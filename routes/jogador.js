var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Jogador = require('../models/Jogador.js');

/* GET /time Listagem de usuários. */
router.get('/', function(req, res, next) {
  Jogador.find(function (err, jogador) {
    if (err) return next(err);
    res.json(jogador);
  });
});

/* POST /jogador Cadastro de usuário */
router.post('/', function(req, res, next) {
  Jogador.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /jogador/id  Lista filtrada por um usuário*/
router.get('/:id', function(req, res, next) {
  Jogador.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /jogador/:id Salva a edição de usuário */
router.put('/:id', function(req, res, next) {
  Jogador.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /jogador/:id Deletando o usuário a partir do id */
router.delete('/:id', function(req, res, next) {
  Jogador.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
