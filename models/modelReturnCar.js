import mongoose from "mongoose";

const Schema = mongoose.Schema;

const returncar = new Schema({
  returnnumber: {
    type: Number,
    required: true,
  },
  rentnumber: {
    type: Number,
    required: true,
  },
  returndate: {
    type: String,
    required: true,
  },
});

export const modelReturnCar = mongoose.model("renturncars", returncar);