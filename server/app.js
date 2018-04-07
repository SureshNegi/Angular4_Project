//https://malcoded.com/posts/angular-backend-express
const express = require('express');
const bodyParser = require('body-parser');
var commonRoute = require("./routes/common.route");

const app = express();

app.listen(8000, () => {
  console.log('Server started!');
});

app
  //.use(cors())
  .use(bodyParser.json())
  .use("/api", commonRoute)
  
//.use("/api", route)
//.use("/actionPlans", actionPlans)
//.use("/charts",chartData)