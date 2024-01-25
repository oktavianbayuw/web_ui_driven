import connectDB from "../../connection/mongo";

export default async function handler(req, res) {
  const { keywords, path_name, page = 1, pageSize = 2 } = req.query;

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
    let totalData = 0;
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

      const collection = db.collection(collectionName);
      const countQuery = {
        $or: [
          {
            url_path: { $regex: new RegExp(processedKeywords.join("|"), "i") },
          },
          {
            metadata: { $regex: new RegExp(processedKeywords.join("|"), "i") },
          },
        ],
      };

      totalData += await collection.countDocuments(countQuery);

      const skip = (page - 1) * pageSize;
      const intPageSize = parseInt(pageSize, 10);

      const searchData = await collection
        .find(countQuery)
        .skip(skip)
        .limit(intPageSize)
        .toArray();

      data = data.concat(searchData);
    }

    console.log(data.length === 0);
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
    } else {
      route = "notfound";
    }

    res.status(200).json({
      data,
      route,
      totalPages: Math.ceil(totalData / pageSize), // Perubahan disini
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
