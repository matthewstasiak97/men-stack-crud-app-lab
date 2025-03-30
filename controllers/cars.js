import Car from "../models/car.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const cars = await Car.find();
  res.render("cars/index", { cars });
});

router.get("/new", (req, res) => {
  res.render("cars/new");
});

router.post("/", async (req, res) => {
  req.body.isElectric = req.body.isElectric === "on";
  await Car.create(req.body);
  res.redirect("/cars");
});

router.get("/:id/edit", async (req, res) => {
  const car = await Car.findById(req.params.id);
  res.render("cars/edit", { car });
});

router.get("/:id", async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).send("Car not found");
    res.render("cars/show", { car });
  } catch (err) {
    console.error(err);
    res.status(400).send("Invalid car ID");
  }
});

router.put("/:id", async (req, res) => {
  req.body.isElectric = req.body.isElectric === "on";
  await Car.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/cars/${req.params.id}`);
});

router.delete("/:id", async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.redirect("/cars");
});

export default router;
