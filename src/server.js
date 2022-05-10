const express = require("express");
const next = require("next");

const dev = process.env.MODE_ENV !== "production";
const app = next({ dev });
const handler = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.
      get("*", (req, res) => {
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
