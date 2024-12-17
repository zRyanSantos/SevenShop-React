const fs = require('fs')

function getAllProducts() {
    return JSON.parse(fs.readFileSync('products.json'))
}

module.exports = {getAllProducts}