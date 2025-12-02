import express from "express";
import { PORT } from "./config/config.js";
import dbConnect from "./server.js";

const app = express();

app.get("/", (req, res) => {
  res.send("done well baby");
});

async function startServer() {
  await dbConnect();
  app.listen(PORT, () => {
    console.log("App listening on port", PORT);
  });
}
startServer();
