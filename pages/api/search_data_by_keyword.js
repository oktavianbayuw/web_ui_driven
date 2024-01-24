import connectDB from "../../connection/mongo";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { keywords } = req.query;

  // Proses kata kunci untuk menghilangkan kata tanya atau kata hubung
  const processedKeywords = keywords.replace(/[\?\.,]/g, "").split(" ");

  try {
    const db = await connectDB();

    const collections = [
      "info_berita_kampus",
      "info_pendidikan_kampus",
      "info_pengumuman_kampus",
      "penelitian_dosen",
    ];

    let results = [];
    let route = "";

    for (const collectionName of collections) {
      const urlPathSearch = await db
        .collection(collectionName)
        .find({
          url_path: { $regex: new RegExp(processedKeywords.join("|"), "i") },
        })
        .toArray();

      const metadataRegexSearch = await db
        .collection(collectionName)
        .find({
          metadata: { $regex: new RegExp(processedKeywords.join("|"), "i") },
        })
        .toArray();

      results = results.concat(urlPathSearch, metadataRegexSearch);
    }

    if (results.length > 0 && results[0].url_path) {
      const urlPath = results[0].url_path.toLowerCase();
      if (urlPath.includes("penelitian")) {
        route = "admin/kegiatan/penelitian";
      } else if (
        urlPath.includes("berita") ||
        urlPath.includes("info-pendidikan") ||
        urlPath.includes("pengumuman")
      ) {
        route = "admin/info-kampus";
      }
    }

    res.status(200).json({ results, route });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
