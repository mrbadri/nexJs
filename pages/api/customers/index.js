// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from "cors";
import nextConnect from "next-connect";

let customers = [
  { id: 1, name: "customer 1" },
  { id: 2, name: "customer 2" },
  { id: 3, name: "customer 3" },
  { id: 4, name: "customer 4" },
  { id: 5, name: "customer 5" },
];

const handler = nextConnect();

const cors = Cors({
  origin: "http://localhost:3000",
});

handler.use(cors).get(async (req, res) => {
  res.status(200).json({ data: customers, status: "success" });
});

export default handler;
