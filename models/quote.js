const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const schema = mongoose.Schema;

const quoteSchema = new Schema({
  quote: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
})

module.exports = mongoose.model('Quote', quoteSchema);

