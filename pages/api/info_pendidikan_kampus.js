import connectDB from "../../connection/mongo";

export default async function handler(req, res) {
  const db = await connectDB();
  const collection = db.collection("info_pendidiakan_kampusn");

  const data = await collection.find().toArray();

  res.status(200).json({ data });
}
