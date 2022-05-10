let customers = [];

export default (req, res) => {

  if (req.method === "POST") {
    customers.push(JSON.parse(req.body));

    res.status(200).json({ data: "post created", status: "success" });
  } else {
    res.status(500).json({ data: "error", status: "success" });
  }
};
