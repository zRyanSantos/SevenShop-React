const { getAllCartProducts, addCartProduct, delCartProduct } = require('../services/cart.js');

function getCartProducts(req, res) {
    try {
        const products = getAllCartProducts();
        res.status(200)
        res.send(products);        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postCartProducts(req, res) {
    try {
        const id = req.params.id;
        addCartProduct(id);
        res.status(200)
        res.send('Produto adicionado ao carrinho');
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteCartProduct(req, res) {
    try {
        const id = req.params.id;
        console.log("ID recebido para exclusão:", id);

        if (id && !isNaN(Number(id)) && Number(id) > 0) {
            delCartProduct(id);
            res.status(200);
            res.send("Produto removido do carrinho!");
        } else {
            res.status(422);
            res.send("ID inválido");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = { getCartProducts, postCartProducts, deleteCartProduct }