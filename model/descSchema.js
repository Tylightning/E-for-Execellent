var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var descSchema = new Schema({
  summary: String,
  weather: String,
  surrondings: String
});

var desc = mongoose.model('desc', descSchema);

module.exports = desc;