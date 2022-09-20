const express = require('express');

const app = express()

const port = 3000

const routes = require("./routes/record");
var mongoUtil = require( './db/connect' );

app.use(express.urlencoded({ extended: true }))

routes(app);



mongoUtil.connectToServer( function( err, client ) {
  if (err) console.log(err);
  // start the rest of your app here
} );

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })