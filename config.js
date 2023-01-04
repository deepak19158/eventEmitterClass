const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://deepak:deepak@cluster0.edlhdwt.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function collection() {
  let result = await client.connect();
  db = result.db("databse");
  return db.collection("datas");
}

module.exports = collection;
