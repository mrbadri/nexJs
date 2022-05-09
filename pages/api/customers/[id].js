export default (req, res) => {
  const {
    query: { id },
  } = req;

  let customers = [{ id, name: "customer 1" }];
  res.status(200).json({ data: customers, status: "success" });
};
