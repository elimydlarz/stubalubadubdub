# Stub-a-lub-a-dub-dub!

## Installing

You'll need to have Node and MongoDB already installed:

```
brew update
brew install node
brew install mongodb
```

Then you can install the apps NPM dependencies:

```
npm install
```

## Running

Start the mongo server:

```
npm run mongo
```

Start Stub-a-lub-a-dub-dub:

```
npm start
```

## Using

View and modify the database:

```
http://localhost:3000/mongoses
```

Retrieve a collection of documents in the database:

```
http://localhost:3000/:collection_name
```

Retrieve specific documents in the database based on your URL:

```
http://localhost:3000/:collection_name/key/:key/value/:value
```

Retrieve specific documents in the database based on your URL and request headers, where the key and value of the header you have set match the key and value of the documents you are searching for:

```
http://localhost:3000/:collection_name/header/:header_key
```

## Modifying

If you need an endpoint that does something different, go nuts! You can edit [app.js](app.js) as per the [ExpressJS API reference](http://expressjs.com/en/api.html).
