require('dotenv').config();

var mongoose = require('mongoose');

// DB setting
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  console.log('Connected to Mongo!');
}).catch((err) => {
  console.error('Error connecting to Mongo', err);
});

const db = mongoose.connection
module.exports = db
