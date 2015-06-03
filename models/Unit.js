var mongoose = require("mongoose");

var UnitSchema = mongoose.Schema({
  full_name: String,
  magazine: String,
  ordered: { type: Date, default: Date.now },
  address: String,
  units: {mongoose.Schema.Types.ObjectId, ref: "Sector"}
  units: {mongoose.Schema.Types.ObjectId, ref: "Zone"}
});

mongoose.model("Unit", UnitSchema);
