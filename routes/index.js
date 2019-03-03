const routes = require('express').Router();
const category = require('./category');
const product = require('./product');

routes.use(category);
routes.use(product);

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to home page.' });
});

module.exports = routes;