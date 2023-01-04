const mongoose = require("./mongoose");

const dataSchema = new mongoose.Schema({
  name: "String",
  timestamp: "String",
});

module.exports = mongoose.model("datas", dataSchema);
