// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from "cors";
import nextConnect from "next-connect";

const handler = nextConnect();
const Customer = require("../../../models/customer");

const cors = Cors({
  origin: "http://localhost:3000",
});


handler.use(cors);

handler.get(async (req, res) => {
  const customers = await Customer.find();

  res.status(200).json({ data: customers, status: "success" });
});

export default handler;
