import express from "express";
import { PORT } from "./config/config.js";
import dbConnect from "./server.js";
import ProfileRouter from "./routes/routeProfile.js";
const app = express();
app.use(express.json());

app.use("/api/profile",ProfileRouter);

async function startServer() {
  await dbConnect();
  app.listen(PORT, () => {
    console.log("App listening on port", PORT);
  });
}
startServer();
 export default app;
