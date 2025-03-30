import dotenv from "dotenv";
dotenv.config();
import express from "express";
import db from "./db/connection.js";
import MongoStore from "connect-mongo";
import methodOverride from "method-override";
import logger from "morgan";
import carRoutes from "./controllers/cars.js";
import connectMongo from "connect-mongo";
const PORT = process.env.PORT || "3000";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(logger("dev"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect("/cars");
});

app.use("/cars", carRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
