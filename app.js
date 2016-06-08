import express from 'express';
import mongodb from 'mongodb';
import mongo_express from 'mongo-express/lib/middleware';
import mongo_express_config from './mongo.config.js';

const app = express();
const mongo = mongodb.MongoClient;

app.use('/mongoses', mongo_express(mongo_express_config));

app.get('/:db/:collection', (req, res) => {
  mongo.connect(`mongodb://localhost:27017/${req.param('db')}`, (err, db) => {
    db.collection(req.param('collection')).find().toArray(function(err, result) {
      res.json(result);
    });
  });
});

app.listen(3000);
