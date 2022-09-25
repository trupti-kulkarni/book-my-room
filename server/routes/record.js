
const express = require("express");
const mongoClient = require("../db/connect")

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

 let routes = (app)=>{
    recordRoutes.get('/hotels',(req,res)=>{
      res.set('Access-Control-Allow-Origin', '*');
        const dbConnect = mongoClient.getDb();
        let city = req.query.city;
        var required_rooms = req.query.rooms
        console.log("city is--",city,"rooms are--",required_rooms);
        const agg = [
          {
            '$match': {
              'city': new RegExp(city, 'i')
            }
          }, {
            '$unwind': '$hotels'
          }, {
            '$unwind': '$hotels.rooms'
          }, {
            '$match': {
              'hotels.rooms.available_rooms':  {'$gte': parseInt(required_rooms)} 
            }
          }
        ];

        console.log("aggregates are--",agg);
        const coll = dbConnect.collection('hotels');
        const cursor = coll.aggregate(agg);
        cursor.toArray(function(err,result){
          if (err) {
                res.status(400).send("Error fetching listings!");
             } else {
              console.log("result ");
                res.json(result);
              }
        });
        
      
  });
    
  app.use(recordRoutes)
}

module.exports = routes;

  