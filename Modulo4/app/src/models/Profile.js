const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  name: { type: String },
  username: { type: String },
  password: { type: String },
});

module.exports = Profile = mongoose.model('Profile', ProfileSchema);