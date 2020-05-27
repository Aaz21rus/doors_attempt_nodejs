const express = require('express')
const router = express.Router()
const Product = require('../modules/Product')

router.post('/product/add', (req, res) => {
  console.log(req.body);
  const product = new Product()
  Object.keys(req.body).map(key => {
    product[key] = req.body[key]
  })
  
  product.save(function(err) {
    if(err) throw err
    res.send(200)   
  })
})

module.exports = router