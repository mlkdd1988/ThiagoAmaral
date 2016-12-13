var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Time = require('../models/Time.js');

/* GET /time Listagem de usuários. */
router.get('/', function(req, res, next) {
  Time.find(function (err, time) {
    if (err) return next(err);
    res.json(time);
  });
});

/* POST /time Cadastro de usuário */
router.post('/', function(req, res, next) {
  Time.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /time/id  Lista filtrada por um usuário*/
router.get('/:id', function(req, res, next) {
  Time.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /time/:id Salva a edição de usuário */
router.put('/:id', function(req, res, next) {
  Time.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /time/:id Deletando o usuário a partir do id */
router.delete('/:id', function(req, res, next) {
  Time.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
