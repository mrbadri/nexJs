import Cors from "cors";
import nextConnect from "next-connect";

const handler = nextConnect();

const cors = Cors({
  origin: "http://localhost:3000",
});

handler.use(cors);

handler.get(async (req, res) => {
  const {
    query: { id },
  } = req;

  let customers = [{ id, name: "customer 1" }];
  res.status(200).json({ data: customers, status: "success" });
});

export default handler;
