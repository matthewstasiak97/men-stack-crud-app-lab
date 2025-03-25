import express from "express";
import "./db/connection.js";
import carsRouter from "./controllers/cars.js";

const PORT = process.env.PORT || "3000";
const app = express();

app.set("view engine", "ejs");

app.use("/", carsRouter);

app.get("/new", (req, res) => {});

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
