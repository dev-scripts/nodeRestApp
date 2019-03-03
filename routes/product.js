const router = require('express').Router();

const product = require('../model/product');

router.route('/product')
    .get(product.get)
    .put(product.update)
    .delete(product.delete)
    .post(product.create);

router.route('/product/:id')
    .get(product.view);

module.exports = router;