const express = require('express')
const router = express.Router()
const Product = require('../modules/Product')

//Public routes
router.get('/', (req, res) => {
  Product.find({ title: '1' }, (err, docs) => {
    if (err) throw err
    res.render('public/main', { tempSrc: '/storage/product/' + docs[0].image })
  })
  // res.render('public/main')
})
router.get('/catalog', (req, res) => res.render('public/catalog'))
router.get('/card', (req, res) => res.render('public/card'))
router.get('/basket', (req, res) => res.render('public/basket'))
router.get('/company', (req, res) => res.render('public/company'))

//Admin routes
router.get('/admin', (req, res) => res.render('admin/index'))

module.exports = router
