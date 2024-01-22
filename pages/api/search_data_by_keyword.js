import connectDB from "../../connection/mongo";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { keywords } = req.query;

  try {
    const db = await connectDB();
    const collection = db.collection("penelitian_dosen");

    let query = {};

    if (keywords && Array.isArray(keywords)) {
      const individualKeywords = keywords.join(" ").split(" ");

      query = {
        $or: individualKeywords.map((keyword) => ({
          field1: keyword,
          field2: keyword,
          // tambahkan field lain sesuai kebutuhan
        })),
      };
    }

    const data = await collection.find(query).toArray();

    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
