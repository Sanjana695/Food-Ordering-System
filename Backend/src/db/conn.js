const mongoose = require("mongoose");

//connection creation and create database
// mongoose.connect("mongodb://localhost:27017/foodOrdering",{useNewUrlParser:true,useUnifiedTopology:true})
mongoose
  .connect("mongodb://127.0.0.1:27017/foodOrdering")
  .then(() => console.log("connection successfully"))
  .catch((err) => console.log(err));
