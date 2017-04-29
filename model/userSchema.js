var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var userSchema = new Schema({
  name: String,
  password: String,
  email: String
});

var user = mongoose.model('user', userSchema);

module.exports = user;