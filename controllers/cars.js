import { Router } from "express";
import car from "../models/car.js";

const carsRouter = Router();

carsRouter.get("/", (req, res) => {
  res.render("index");
});

carsRouter.get("/new", (req, res) => {
  res.render("new");
});

export default carsRouter;
