# Stub-a-lub-a-dub-dub!

## Installation

```
npm install
```

## Running

Start the mongo server with:

```
mongod --dbpath db
```

Start Stub-a-lub-a-dub-dub:

```
node app.js
```

## Using

Navigate to `http://localhost:3000/mongoses` to view and modify the database.

Navigate to `http://localhost:3000/:db_name/:collection_name` to return documents in the database as JSON.