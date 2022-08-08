const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

//Declare Our Port
const port = 3000;

//Run the server
app.listen(port, () => {
  console.log(`Server is runnning on port ${port}`);
});
