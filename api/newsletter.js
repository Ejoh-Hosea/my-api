export default function handler(req, res) {
  // allow requests from anywhere (or just your localhost)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "POST") {
    const body = req.body || {};

    if (!body.name || !body.lastName || !body.email) {
      return res.status(400).json({ msg: "please provide all values" });
    }

    return res.status(200).json({ msg: "success" });
  }

  return res.status(404).json({ msg: "route not found" });
}
