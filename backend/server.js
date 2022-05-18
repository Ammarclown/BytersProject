const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
 HEAD
// get driver connection
const dbo = require("./conn.js");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);


const uri = process.env.ATLAS_URI;
mongoose.connect('mongodb://localhost:27017/test');
const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
})
app.listen(port, () => {
console.log(`Server is  running on port: ${port}`);

});})