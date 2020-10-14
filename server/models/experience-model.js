var mongoose = require('mongoose');
const Schema = mongoose.Schema

const ExperienceSchema = new Schema({
  title: { type: String, required: true },
  sub_title: { type: String, required: true },
  description: { type: String },
  start_time: { type: String },
  end_time: { type: String }
});

module.exports = mongoose.model('experience', ExperienceSchema);
