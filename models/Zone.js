var mongoose = require("mongoose");

var ZoneSchema = new mongoose.Schema({
  name: String,
  total_units: int,
  total_delivers: int,
  sectors: [{type: mongoose.Schema.Types.ObjectId, ref: 'Sector'}],
});

mongoose.model("Zone", ZoneSchema);
