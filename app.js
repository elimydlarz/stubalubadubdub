import express from 'express';
import mongodb from 'mongodb';
import mongo_express from 'mongo-express/lib/middleware';
import mongo_express_config from './mongo.config.js';

const app = express();

const retrieveData = (collectionName, query, resultHandler) =>
    mongodb.MongoClient.connect('mongodb://localhost:27017/db', (error, db) =>
      db.collection(collectionName).find(query).toArray(resultHandler)
    );

app.use('/mongoses', mongo_express(mongo_express_config));

app.get('/:collection', (request, response) => {
  const query = undefined;

  retrieveData(request.params.collection, query, (error, result) =>
      response.json(result)
  );
});

app.get('/:collection/header/:header', (request, response) => {
  let query = {};
  query[request.params.header] = request.header(request.params.header);

  retrieveData(request.params.collection, query, (error, result) =>
      response.json(result)
  );
});

app.get('/:collection/key/:key/value/:value', (request, response) => {
  let query = {};
  query[request.params.key] = request.params.value;

  retrieveData(request.params.collection, query, (error, result) =>
      response.json(result)
  );
});

app.listen(3000);
