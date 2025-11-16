// api/newsletter.js
export default function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body || {};

    if (!body.name || !body.lastName || !body.email) {
      return res.status(400).json({ msg: "please provide all values" });
    }

    return res.status(200).json({ msg: "success" });
  }

  // all other methods (GET, PUT, etc.)
  return res.status(404).json({ msg: "route not found" });
}
