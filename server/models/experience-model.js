var mongoose = require('mongoose');
const Schema = mongoose.Schema

const ExperienceSchema = new Schema({
  title: { type: String, required: true },
  sub_title: { type: String, required: true },
  description: { type: String },
  start_date: { type: Date, default: Date.now },
  end_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('experience', ExperienceSchema);
