// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let customers = [
  { id: 1, name: "customer 1" },
  { id: 2, name: "customer 2" },
  { id: 3, name: "customer 3" },
  { id: 4, name: "customer 4" },
  { id: 5, name: "customer 5" },
];

export default function handler(req, res) {
  res.status(200).json(customers);
}
