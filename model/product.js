const product = require('express').Router();

module.exports = {

    // Get all the products
    get: (req, res) => {
        let query = "SELECT * FROM `products` ORDER BY id ASC";
        // execute query
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Database error.', response: err });
            }
            return res.status(200).json({ message: '', response: result });
        });
    },

    // get one product by product Id
    view: (req, res) => {
        let id = req.params.id;
        let query = "SELECT * FROM `products` WHERE id = " + id + "";
        // execute query
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Database error.', response: err });
            }
            if (result.length > 0) {
                return res.status(200).json({ message: '', response: result });
            }
            else {
                return res.status(400).json({ message: 'Record not found.', response: err });
            }
        });
    },

    // create product

    create: (req, res) => {
        let name = req.body.name;
        let fk_category_id = req.body.fk_category_id;
        let description = req.body.description;
        let unit_price = req.body.unit_price;
        let status = req.body.status;

        let productQuery = "SELECT * FROM `products` WHERE name = '" + name + "'";
        db.query(productQuery, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Database error.', response: err });
            }
            if (result.length > 0) {
                return res.status(200).json({ message: 'Product already exists.', response: '' });
            }
            else {
                let query = "INSERT INTO `products` (name, fk_category_id,description, unit_price, status) VALUES ('" +
                    name + "', '" + fk_category_id + "','" + unit_price + "','" + status + "','" + status + "')";
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).json({ message: 'Database error.', response: err });
                    }
                    return res.status(200).json({ message: 'Added successfully.', response: '' });
                });
            }
        });
    },

    // update product
    update: (req, res) => {

        let name = req.body.name;
        let fk_category_id = req.body.fk_category_id;
        let description = req.body.description;
        let unit_price = req.body.unit_price;
        let status = req.body.status;
        let id = req.body.id;
        let productQuery = "SELECT * FROM `products` WHERE id = '" + id + "'";

        db.query(productQuery, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Database error.', response: err });
            }
            if (result.length == 0) {
                return res.status(400).json({ message: 'Product not found.', response: '' });
            }
            else {
                let query = "UPDATE `products` SET name = '" + name + "', fk_category_id = '" + fk_category_id + "', description = '" + description + "',unit_price = '" + unit_price + "', status='" + status + "' WHERE id='" + id + "'";
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).json({ message: 'Database error.', response: err });
                    }
                    return res.status(200).json({ message: 'Updated successfully', response: '' });
                });
            }
        });
    },

    // delete Product form database
    delete: (req, res) => {
        let id = req.body.id;
        let productQuery = "SELECT * FROM `products` WHERE id = '" + id + "'";

        db.query(productQuery, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Database error.', response: err });
            }
            if (result.length == 0) {
                return res.status(400).json({ message: 'Product not found.', response: '' });
            }
            else {
                let query = "DELETE FROM `products` WHERE id='" + id + "'";
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).json({ message: 'Database error.', response: err });
                    }
                    return res.status(200).json({ message: 'Deleted successfully.', response: '' });
                });
            }
        });
    }
}