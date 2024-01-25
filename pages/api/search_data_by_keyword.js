import connectDB from "../../connection/mongo";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { keywords, path_name } = req.query;
  console.log(path_name);

  const processedKeywords = keywords.replace(/[\?\.,]/g, "").split(" ");

  try {
    const db = await connectDB();

    const collections = [
      "info_berita_kampus",
      "info_pendidikan_kampus",
      "info_pengumuman_kampus",
      "penelitian_dosen",
    ];

    let data = [];
    let route = "";

    for (const collectionName of collections) {
      if (
        (path_name === "kegiatan" || path_name === "kegiatan/penelitian") &&
        collectionName !== "penelitian_dosen"
      ) {
        continue;
      }

      if (
        path_name === "info-kampus" &&
        collectionName !== "info_berita_kampus" &&
        collectionName !== "info_pengumuman_kampus" &&
        collectionName !== "info_pendidikan_kampus"
      ) {
        continue;
      }

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

      data = data.concat(urlPathSearch, metadataRegexSearch);
    }

    if (data.length > 0 && data[0].url_path) {
      if (path_name === "info-kampus") {
        route = "admin/info-kampus/hasil";
      } else if (
        path_name === "kegiatan" ||
        path_name === "kegiatan/penelitian"
      ) {
        route = "admin/kegiatan/hasil";
      } else {
        route = `admin/semua_pencarian`;
      }
    }

    res.status(200).json({ data, route });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
