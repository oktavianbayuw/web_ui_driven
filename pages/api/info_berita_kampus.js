import connectDB from "../../connection/mongo";

export default async function handler(req, res) {
  const { page = 1, pageSize = 2 } = req.query;

  try {
    const db = await connectDB();
    const collection = db.collection("info_berita_kampus");

    // Hitung jumlah total dat1
    const totalData = await collection.countDocuments();

    // Hitung skip berdasarkan halaman dan ukuran halaman
    const skip = (page - 1) * pageSize;

    // Ubah pageSize menjadi integer
    const intPageSize = parseInt(pageSize, 10);

    // Ambil data dari MongoDB dengan limit dan skip
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
