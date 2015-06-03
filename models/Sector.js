var mongoose = require("mongoose");

var SectorSchema = mongoose.Schema({
  name: String,
  total_units: int,
  address: String,
  units: [{mongoose.Schema.Types.ObjectId, ref: "Unit"}]
});

mongoose.model("Sector", SectorSchema);
