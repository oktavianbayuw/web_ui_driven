import connectDB from "../../connection/mongo";

export default async function handler(req, res) {
  const { page = 1, pageSize = 2 } = req.query;

  try {
    const db = await connectDB();
    const collection = db.collection("penelitian_dosen");
    const totalData = await collection.countDocuments();
    const skip = (page - 1) * pageSize;
    const intPageSize = parseInt(pageSize, 10);
    const data = await collection
      .find()
      .skip(skip)
      .limit(intPageSize)
      .toArray();

    res.status(200).json({
      data,
      totalPages: Math.ceil(totalData / intPageSize),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
