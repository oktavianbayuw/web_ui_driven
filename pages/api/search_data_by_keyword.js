import connectDB from "../../connection/mongo";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { keywords } = req.query;

  try {
    const db = await connectDB();

    // Define collections to search in
    const collections = [
      "info_berita_kampus",
      "info_pendidikan_kampus",
      "info_pengumuman_kampus",
      "penelitian_dosen",
    ];

    // Initialize an empty result array
    let results = [];

    // Loop through each collection and perform the search
    for (const collectionName of collections) {
      const collection = db.collection(collectionName);

      let query = {};

      if (keywords && Array.isArray(keywords)) {
        const keywordArray = keywords.map(
          (keyword) => new RegExp(keyword, "i")
        );

        query = {
          metadata: { $regex: keywordArray.join("|") },
        };

        const data = await collection.find(query).toArray();
        results = results.concat(data);
      }
    }

    res.status(200).json({ results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
