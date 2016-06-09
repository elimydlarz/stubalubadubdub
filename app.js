import express from 'express';
import mongodb from 'mongodb';
import mongo_express from 'mongo-express/lib/middleware';
import mongo_express_config from './mongo.config.js';

const app = express();
const mongo = mongodb.MongoClient;

app.use('/mongoses', mongo_express(mongo_express_config));

app.get('/:db/:collection', (req, res) => {
  mongo.connect(`mongodb://localhost:27017/${req.params.db}`, (err, db) => {
    db.collection(req.params.collection).find().toArray(function(err, result) {
      res.json(result);
    });
  });
});

app.get('/:db/:collection/header/:header', (req, res) => {
  mongo.connect(`mongodb://localhost:27017/${req.params.db}`, (err, db) => {
    let query = {};
    query[req.params.header] = req.header(req.params.header);

    db.collection(req.params.collection).find(query).toArray(function(err, result) {
      res.json(result);
    });
  });
});

app.get('/:db/:collection/key/:key/value/:value', (req, res) => {
  let query = {};
  query[req.params.key] = req.header(req.params.value);

  mongo.connect(`mongodb://localhost:27017/${req.params.db}`, (err, db) => {
    db.collection(req.params.collection).find(query).toArray(function(err, result) {
      res.json(result);
    });
  });
});

app.listen(3000);
