const { getAllProducts } = require('../services/products');

function getProducts(req, res) {
    try {
        const products = getAllProducts();
        res.status(200)
        res.send(products);        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = { getProducts }