var express = require("express");

var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/insert', (req, res) => {
   let id = req.body.id;
   let base64 = req.body.base64;
   console.log("id =" +id);
   console.log("base64 =" +base64);
   
   
   return res.send("ok");
  });
app.listen(3000, () => {
    console.log("Server running on port 3000");
   });