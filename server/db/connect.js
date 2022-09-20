// const {MongoClient} = require('mongodb');

// const uri = "mongodb+srv://admin:admin@cluster0.0xazb.mongodb.net/?retryWrites=true&w=majority"
// async function main() {
// 	// we'll add code here soon


//     const client = new MongoClient(uri);
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
 
//         // Make the appropriate DB calls
//         await  listDatabases(client);
 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }


// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// main().catch(console.error);

const { MongoClient } = require("mongodb");
const connectionString = "mongodb+srv://admin:admin@cluster0.0xazb.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }
      dbConnection = db.db("hotel-management");
      console.log("Successfully connected to MongoDB.");
      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};