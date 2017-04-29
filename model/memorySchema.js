var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId,
    desc = require('./descSchema');
    
var memorySchema = new Schema({
  name: String,
  summary: String,
  weather: String,
  surrondings: String,
  location: String,
  img: String,
  date: Date,
  user_id: ObjectId
});

var memory = mongoose.model('memory', memorySchema);

module.exports = memory;