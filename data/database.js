const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect("mongodb://127.0.0.1:27017");

  database = client.db("shoe-store");
}

function getDb() {
  if (!database) {
    throw new Error("No Database");
  }
  return database;
}

module.exports = {
  getDb: getDb,
  connectToDatabase: connectToDatabase,
};
