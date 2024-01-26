import { MongoClient } from "mongodb";

const uri =
  "mongodb://mongo:mongo@localhost:27017/web_ai_speech?authSource=admin";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let database;

const connectDB = async () => {
  client = new MongoClient(uri, options);

  if (!(await client.connect())) {
    throw new Error("Unable to connect to the database");
  }

  database = client.db();

  return database;
};

export default connectDB;
