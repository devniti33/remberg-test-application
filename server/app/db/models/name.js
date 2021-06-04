import mongoose from "mongoose";

const NameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    first: {
      type: String,
      trim: true,
    },
    last: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Name = mongoose.model("Name", NameSchema);

export default Name;
