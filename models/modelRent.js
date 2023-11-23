import mongoose from "mongoose";

const Schema = mongoose.Schema;

const rent = new Schema({
  rentnumber: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  platenumber: {
    type: String,
    required: true,
  },
  initialdate: {
    type: String,
    required: true,
  },
  finaldate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export const modelRent = mongoose.model("rents", rent);
