import mongoose, { Schema, models, model } from "mongoose";

const formFields = new Schema({
  count: Number,
  long: Number,
  high: Number,
  width: Number,
  weight: Number,
});

const exValue = new Schema({
  cost: Number,
});

const cargoDetailsSchema = new Schema(
  {
    defaultValues: { type: [formFields], default: undefined },
    exwork: { type: [exValue], default: undefined },
    client: String,
    sdl: String,
    price: Number,
    transport: String,
    menaFrom: String,
    menaTo: String,
  },

  { timestamps: true }
);

const CargoDetails =
  models?.CargoDetails || model("CargoDetails", cargoDetailsSchema);

export default CargoDetails;
