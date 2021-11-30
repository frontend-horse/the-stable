export default function handler(req, res) {
  console.log("🚀 ~ file: data.js ~ line 2 ~ handler ~ req", req);

  res.status(200).json({ name: "John Doe" });
}
