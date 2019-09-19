module.exports = function (app) {

    const books = require('../controller/book.controller.js');

    app.post('/api/book', books.create);
    app.get('/api/book', books.findAll);
    app.get('/api/book/:id', books.findByPk);
    app.put('/api/book/:id', books.update);
    app.delete('/api/book/:id', books.delete);
}