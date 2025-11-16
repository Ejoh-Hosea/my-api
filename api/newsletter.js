export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "only POST requests allowed" });
  }

  const body = req.body;

  if (!body.name || !body.lastName || !body.email) {
    return res.status(400).json({ msg: "please provide all values" });
  }

  return res.status(200).json({ msg: "success" });
}
