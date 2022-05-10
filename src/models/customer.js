const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
});

const CusomerMOdel = new mongoose.model("customer", schema);

module.exports = CusomerMOdel;
