var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

var mongo_express = require('mongo-express/lib/middleware');
var mongo_express_config = require('./mongo.config.js');
app.use('/mongoses', mongo_express(mongo_express_config));

app.get('/:db/:collection', function (req, res) {
  MongoClient.connect('mongodb://localhost:27017/' + req.param('db'), function(err, db) {
    db.collection(req.param('collection')).find().toArray(function(err, result) {
      res.json(result);
    });
  });
});

app.listen(3000);
