
const express = require("express");
const mongoClient = require("../db/connect")

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

 let routes = (app)=>{
    recordRoutes.get('/listings',(req,res)=>{
        const dbConnect = mongoClient.getDb();
        console.log("db connect is--",dbConnect);
        dbConnect.collection("hotels").find({}).limit(50).toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching listings!");
       } else {
          res.json(result);
        }
      });
  });
    
  app.use(recordRoutes)
}

module.exports = routes;

  