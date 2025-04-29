const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  category: String,
  name: String,
  description: String,
  price: String,
  image: String
});

module.exports = mongoose.model('Product', productSchema);