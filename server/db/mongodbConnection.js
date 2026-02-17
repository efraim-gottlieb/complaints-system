import { MongoClient } from "mongodb";

const MONGO_URL =
  "mongodb://admin:password123@localhost:27018/products?authSource=admin";
const DB_NAME = "complaints";
const COLLECTION_NAME = "complaints";

let mongocClient = null;
let mongoConn = null;

export async function getMongoDbConnection() {
  if (!mongoConn) {
    if (!mongocClient) {
      mongocClient = new MongoClient(MONGO_URL);
    }
    await mongocClient.connect();
    mongoConn = mongocClient.db(DB_NAME);
  }
  return mongoConn;
}
