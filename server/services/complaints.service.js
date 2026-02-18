import { getMongoDbConnection } from "../db/mongodbConnection.js";

async function getComplaints() {
  const conn = await getMongoDbConnection();
  const collection = await conn.collection("complaints");
  const complaints = await collection.find({}).toArray();
  return complaints;
}
async function createComplaint(complaint) {
  const { category, message } = complaint;
  const conn = await getMongoDbConnection();
  const collection = await conn.collection("complaints");
  const createdAt = new Date()
  const newComplaint = await collection.insertOne({ category, message, createdAt });
  return newComplaint;
}

export default { getComplaints, createComplaint };
