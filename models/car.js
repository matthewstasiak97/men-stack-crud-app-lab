import mongoose from "mongoose";

const carSchema = mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  isElectric: Boolean,
});

const Car = mongoose.model("car", carSchema);

export default Car;
