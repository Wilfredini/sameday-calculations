import mongoose, { Schema, models, model } from "mongoose";

const formFields = new Schema({
  count: Number,
  long: Number,
  high: Number,
  width: Number,
  weight: Number,
});

const cargoDetailsSchema = new Schema(
  {
    defaultValues: { type: [formFields], default: undefined },
    client: String,
    sdl: String,
  },

  { timestamps: true }
);

const CargoDetails =
  models?.CargoDetails || model("CargoDetails", cargoDetailsSchema);

export default CargoDetails;
