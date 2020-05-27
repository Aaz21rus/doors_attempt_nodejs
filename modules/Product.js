const mongoose = require('mongoose')
const Schema = mongoose.Schema;

module.exports = mongoose.model('Product', new Schema({
  title: String,
  vendorCode: String,
  price: String,
  priceAll: String,
  // dimensions: [ String ],
  // color: [ String ],
  manufacturer: String,
  material: String,
  appearance: String,
  glass: String,
  thickness: String,
  countInPackage: String,
  image: String
}))

