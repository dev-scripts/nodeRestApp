const category = require('express').Router();

module.exports = {

    // Get all the categories
    get: (req, res) => {
        let query = "SELECT * FROM `categories` ORDER BY id ASC";
        // execute query
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Database error.', response: err });
            }
            return res.status(200).json({ message: '', response: result });
        });
    },

    // get one category by category Id
    view: (req, res) => {
        let id = req.params.id;
        let query = "SELECT * FROM `categories` WHERE id = " + id + "";
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

    // create category
    create: (req, res) => {
        let name = req.body.name;
        let status = req.body.status;
        let categoryQuery = "SELECT * FROM `categories` WHERE name = '" + name + "'";
        db.query(categoryQuery, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Database error.', response: err });
            }
            if (result.length > 0) {
                return res.status(200).json({ message: 'Category already exists.', response: '' });
            }
            else {
                let query = "INSERT INTO `categories` (name, status) VALUES ('" +
                    name + "', '" + status + "')";
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).json({ message: 'Database error.', response: err });
                    }
                    return res.status(200).json({ message: 'Added successfully.', response: '' });
                });
            }
        });
    },

    // update category
    update: (req, res) => {

        let name = req.body.name;
        let status = req.body.status;
        let id = req.body.id;
        let categoryQuery = "SELECT * FROM `categories` WHERE id = '" + id + "'";

        db.query(categoryQuery, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Database error.', response: err });
            }
            if (result.length == 0) {
                return res.status(400).json({ message: 'Category not found.', response: '' });
            }
            else {
                let query = "UPDATE `categories` SET name = '" + name + "', status='" + status + "' WHERE id='" + id + "'";
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).json({ message: 'Database error.', response: err });
                    }
                    return res.status(200).json({ message: 'Updated successfully', response: '' });
                });
            }
        });
    },

    // delete category form database
    delete: (req, res) => {
        let id = req.body.id;
        let categoryQuery = "SELECT * FROM `categories` WHERE id = '" + id + "'";

        db.query(categoryQuery, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Database error.', response: err });
            }
            if (result.length == 0) {
                return res.status(400).json({ message: 'Category not found.', response: '' });
            }
            else {
                let query = "DELETE FROM `categories` WHERE id='" + id + "'";
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