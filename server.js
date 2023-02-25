const express = require("express");
const Evaluation = express();
const cors = require("cors");
const mongoose = require("mongoose");

Evaluation.use(cors());
Evaluation.use(express.json());

//connect to mongoose
mongoose.connect(
  "mongodb+srv://rithesh003:p19y1y3pzIwwDR6g@infocluster.7wj7f4g.mongodb.net/myfirstdatabase"
);

//require route
Evaluation.use("/", require("./src/noteRoutes"));
Evaluation.listen(3001, function() {
  console.log("express server is running on port 3001");
});
