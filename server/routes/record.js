
const express = require("express");
const { ObjectId } = require("mongodb");
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
        //console.log("city is--",city,"rooms are--",required_rooms);
        const agg = [
          
          {
            '$match': {
              "city":new RegExp(city, 'i'),
              'available_rooms':  {'$gte': parseInt(required_rooms)} 
            }
          }
        ];

       // console.log("aggregates are--",agg);
        const coll = dbConnect.collection('hotels');
        const cursor = coll.aggregate(agg);
        cursor.toArray(function(err,result){
          if (err) {
                res.status(400).send("Error fetching listings!");
             } else {
              console.log("result ",result);
                res.json(result);
              }
        });
        
      
  });

  recordRoutes.put("/update_rooms",(req,resp)=>{
    console.log("request string is--",req.body.doc_id);
  
    const myquery = {
       
          '_id':ObjectId(req.body.doc_id)
        
      }
    
    const newvalues ={'$set': {
      'available_rooms': req.body.available_rooms
    }
  }
  console.log("myquery--",myquery);
     const dbConnect = mongoClient.getDb();

     console.log("id is--",req.body.doc_id,"new value is--",req.body.available_rooms);
     dbConnect.collection("hotels").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated",res);
      resp.status(200).send("success")
      // db.close();
    });
    

});
 
recordRoutes.post("/login",(req,resp)=>{
 let uname = req.body.email;
 let password = req.body.password;
 const dbConnect = mongoClient.getDb();
 const cursor = dbConnect.collection("users").find({"uName":uname,"password":password});
 cursor.toArray(function(err,result){
  if (err) {
        resp.status(400).send("Error fetching listings!");
     } else {
      console.log("result ",result);
        resp.json(result);
      }
});

})
    
  app.use(recordRoutes)
}

module.exports = routes;

  