// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from "cors";

const cors = Cors({
  origin: "http://localhost:3000",
});

let customers = [
  { id: 1, name: "customer 1" },
  { id: 2, name: "customer 2" },
  { id: 3, name: "customer 3" },
  { id: 4, name: "customer 4" },
  { id: 5, name: "customer 5" },
];

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      
      return resolve(result);
    });
  });
}

export default async (req, res) => {
  await runMiddleware(req, res, cors);

  res.status(200).json({ data: customers, status: "success" });
};
