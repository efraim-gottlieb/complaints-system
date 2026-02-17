import { getMongoDbConnection } from "../db/mongodbConnection.js";

async function getComplaints() {
  const conn = await getMongoDbConnection();
  const collection = await conn.collection("complaints");
  const complaints = await collection.find({}).toArray();
  return complaints;
}

export default { getComplaints };
