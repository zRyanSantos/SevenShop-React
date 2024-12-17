const express = require('express');
const app = express();
const cors = require('cors');
const productRouter = require('./routes/products');
const cartRouter = require('./routes/cart');

app.use(express.json());
app.use(cors({origin: '*'}));

app.use('/produtos', productRouter)
app.use('/carrinho', cartRouter)

const port = 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})