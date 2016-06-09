import express from 'express';
import mongodb from 'mongodb';
import mongo_express from 'mongo-express/lib/middleware';
import mongo_express_config from './mongo.config.js';

const app = express();

const retrieveData = (databaseName, collectionName, query, respond) =>
    mongodb.MongoClient.connect(`mongodb://localhost:27017/${databaseName}`, (err, db) =>
      db.collection(collectionName).find(query).toArray(respond)
    );

app.use('/mongoses', mongo_express(mongo_express_config));

app.get('/:db/:collection', (request, response) => {
  retrieveData(request.params.db, request.params.collection, undefined, (error, result) =>
      response.json(result)
  );
});

app.get('/:db/:collection/header/:header', (request, response) => {
  let query = {};
  query[request.params.header] = request.header(request.params.header);

  retrieveData(request.params.db, request.params.collection, query, (error, result) =>
      response.json(result)
  );
});

app.get('/:db/:collection/key/:key/value/:value', (request, response) => {
  let query = {};
  query[request.params.key] = request.params.value;

  retrieveData(request.params.db, request.params.collection, query, (error, result) =>
      response.json(result)
  );
});

app.listen(3000);
