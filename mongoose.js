const mongoose = require("mongoose");
const uri =
  "mongodb+srv://deepak:deepak@cluster0.edlhdwt.mongodb.net/databse?retryWrites=true&w=majority";

const res1 = async () => await mongoose.connect(uri);
res1();
module.exports = mongoose;
