

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let item = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  importance: {
    type: Number
  }
},{
    collection: 'item'
});

module.exports = mongoose.model('item', item);