module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define('books', {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING
        },
        publisher: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        },
        stock: {
            type: Sequelize.INTEGER
        }
    });

    return Book;
}