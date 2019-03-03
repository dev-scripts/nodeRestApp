const routes = require('express').Router();
const category = require('./category');
//const post = require('./post/post');

//add more routes
routes.use(category);

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Homepage!' });
});

module.exports = routes;