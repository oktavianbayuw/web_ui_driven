import connectDB from "../../../connection/mongo";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { url_path } = req.query;
  const urlPath = url_path.replace(/,/g, "/");
  console.log(urlPath);

  try {
    const db = await connectDB();
    const collection = db.collection("penelitian_dosen");

    const detailPenelitian = await collection.findOne({
      url_path: urlPath,
    });

    console.log(detailPenelitian);

    if (!detailPenelitian) {
      return res.status(404).json({ error: "Penelitian not found" });
    }

    res.status(200).json({ data: detailPenelitian });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
