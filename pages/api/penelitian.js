import connectDB from "../../connection/mongo";

export default async function handler(req, res) {
  const db = await connectDB();
  const collection = db.collection("penelitian_dosen");

  const data = await collection.find().toArray();

  res.status(200).json({ data });

  const { page = 1, pageSize = 10 } = req.query;

  try {
    // Fetch data from your MongoDB collection with pagination
    const data = await yourPaginationLogic(page, pageSize);

    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
