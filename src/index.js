import express from "express";
import routes from "./routes/routes.js";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import compression from "compression";
import { testApp } from "./app.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(helmet());
app.use(compression({ filter: shouldCompress }));
app.options("*", cors());
app.use("/api/v1", routes);

function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) {
    // don't compress responses with this request header
    return false;
  }

  // fallback to standard filter function
  return compression.filter(req, res);
}

const start = async () => {
  app.listen(PORT, () => {
    console.log(` 🚀 server started at port ${PORT}!!`);
  });
};

start();
