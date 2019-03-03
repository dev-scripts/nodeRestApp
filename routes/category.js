const router = require('express').Router();

const category = require('../model/category');

router.route('/category')
    .get(category.getAll)
    .put(category.update)
    .delete(category.delete)
    .post(category.create);

router.route('/category/:id')
    .get(category.getById);

module.exports = router;