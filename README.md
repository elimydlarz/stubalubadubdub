# Stub-a-lub-a-dub-dub!

## Installation

Stub-a-lub-a-dub-dub is a NodeJS app. You can install it by cloning this repo and then running `npm install`.

## Running

Start the mongo server with `npm run mongo`, then start Stub-a-lub-a-dub-dub with `npm start`.

## Using

Navigate to `http://localhost:3000/mongoses` to view and modify the database.

Navigate to `http://localhost:3000/:db_name/:collection_name` to return documents in the database as JSON.

## Building

If you need an endpoint that does something more complicated - like read request headers - then go nuts. You can edit [app.js](stubalubadubdub/app.js) as per the [ExpressJS API reference](http://expressjs.com/en/api.html).
