"use strict";

let mongoose = require("mongoose");

let selectionSchema = new mongoose.Schema({
  name_id: {
    ref: "Name",
    type: mongoose.Schema.ObjectId,
    required: true,
    unique: true,
  },
});

const Selection = mongoose.model("Selection", selectionSchema);

export default Selection;
