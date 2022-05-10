const express = require("express");
// const { mongoose } = require("mongoose");
const next = require("next");

const dev = process.env.MODE_ENV !== "production";
const app = next({ dev });
const handler = app.getRequestHandler();

// mongoose
//   .connect("mongodb://localhost:27017/nextJs")
//   .then(() => {
//     console.log("DB is conected.");
//   })
//   .catch((err) => {
//     console.log("error on conect DB:", err);
//   });

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req, res) => {
      return handler(req, res);
    });

    server.listen(3000, (error) => {
      if (error) throw error;
      console.log("server running on http://localhost:3000");
    });
  })
  .catch((e) => {
    console.log(e.stack);
    process.exit(1);
  });
