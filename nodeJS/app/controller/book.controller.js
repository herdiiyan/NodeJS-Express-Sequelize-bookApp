const db = require('../config/db.config.js');
const Books = db.book;

exports.create = (req, res) => {
    Books.create({
        id: req.body.id,
        title: req.body.title,
        publisher: req.body.publisher,
        price: req.body.price,
        stock: req.body.stock

    }).then(book => {
        res.send(book);
    });
};

exports.findAll = (req, res) => {
    Books.findAll().then(book => {
        res.send(book);
    });
};

exports.findByPk = (req, res) => {
    Books.findByPk(req.params.id).then(book => {
        res.send(book);
    })
};

exports.update = (req, res) => {
    const id = req.params.id;
    Books.update({
        title: req.body.title,
        publisher: req.body.publisher,
        price: req.body.price,
        stock: req.body.stock
    }, {
        where: {
            id: id
        }
    }).then(() => {
        res.status(200).send("updated successfully a Book with id = " + id);
    });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    Books.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.status(200).send('deleted successfully a customer with id = ' + id);
    });
};