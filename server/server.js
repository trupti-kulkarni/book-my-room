const express = require('express');
const cors = require('cors')

const app = express()

const port = 3000

const routes = require("./routes/record")

app.use(express.urlencoded({ extended: true }))

routes(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })