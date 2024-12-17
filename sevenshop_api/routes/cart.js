const { Router } = require('express');
const { getCartProducts, postCartProducts, deleteCartProduct } = require('../controllers/cart.js');

const router = Router();

router.get('/', getCartProducts);
router.post('/:id', postCartProducts);
router.delete('/:id', deleteCartProduct);

module.exports = router;