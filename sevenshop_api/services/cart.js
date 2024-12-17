const fs = require('fs')

function getAllCartProducts() {
    return JSON.parse(fs.readFileSync('cart.json'))
}

function addCartProduct(id) {
    const products = JSON.parse(fs.readFileSync('products.json'))
    const cartProducts = getAllCartProducts()

    const addProduct = products.find(product => product.id === id)
    const newCartProductList = [...cartProducts, addProduct]

    fs.writeFileSync('cart.json', JSON.stringify(newCartProductList))
}

function delCartProduct(id) {
    let productsCart = getAllCartProducts()

    const filterProducts = productsCart.filter(product => product.id !== id)

    fs.writeFileSync("cart.json", JSON.stringify(filterProducts))
}

module.exports = { getAllCartProducts, addCartProduct, delCartProduct }