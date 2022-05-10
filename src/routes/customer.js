const express = require("express");
const router = express.Router();

const Customer = require("../models/customer");
// const {
//   validateCreateCustomer,
//   validateUpdateCustomer,
// } = require("../validators/CustomerValidator");

router.get("/api/customers", async (req, res) => {
  const customers = await Customer.find();
  res.send(customers);
});

router.get("/api/customers/:id", async (req, res) => {
  const mongoose = require("mongoose");

  if (!mongoose.isValidObjectId(req.params.id))
    !res.status(400).send("Bad Request");

  const customer = await Customer.findById(req.params.id);

  customer
    ? res.send(customer)
    : res.status(404).send({ success: false, message: "not found!" });
});

// api post
router.post("/api/customers/", async (req, res) => {
  //   const { error } = validateCreateCustomer(req.body);
  const { error } = false;

  if (error)
    return res.status(400).send({ success: false, message: error.message });

  const customer = new Customer({
    name: req.body.name,
  });

  const customerSaved = await customer.save();

  res.send(customerSaved);
});

// api put
router.put("/api/customers/:id", async (req, res) => {
  //   const { error } = validateUpdateCustomer({
  //     ...req.body,
  //     id: req.params.id,
  //   });
  const { error } = false;

  if (error)
    return res.status(400).send({ success: false, message: error.message });

  let customer = await Customer.findById(req.params.id);

  // const index = customers.findIndex((customer) => customer.id == req.params.id);

  if (!customer)
    res.status(404).send({ success: false, message: "not found!" });

  customer.name = req.body.name;
  customer = await customer.save();

  res.send(customer);
});

// api delete
router.delete("/api/customers/:id", async (req, res) => {
  await Customer.findByIdAndRemove(req.params.id);

  res.status(200).send("Deleted");
});

module.exports = router;
