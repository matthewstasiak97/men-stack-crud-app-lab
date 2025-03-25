import mongoose from "mongoose";

const carSchema = mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
});

const car = mongoose.model("car", carSchema);

export default car;
