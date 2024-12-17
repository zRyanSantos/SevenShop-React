import { getCartProducts } from "../services/cart";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CartProductsStyled from "../assets/cart-products/index.js";

const ProductsContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 0 2rem;
    border: 0.4rem solid white;
    border-top: none;
    border-radius: 0 0 2rem 2rem;
    padding: 2rem;
    min-height: 100vh;
    background: linear-gradient(180deg, rgb(46 0 78) 0%, rgb(84 0 133) 100%);
    overflow: hidden;
`

function CartProducts() {
    const [ cartProducts, setCartProducts ] = useState([]);
    async function fetchCartProducts() {
        const cartProductsAPI = await getCartProducts();
        setCartProducts(cartProductsAPI);
    }
    useEffect(() => {
        fetchCartProducts();
    }, []);

    const images = require.context('../assets/products-images', false, /\.(png|jpe?g|gif)$/)
    
    return (

        <ProductsContainer>

        {cartProducts.map(product => {
            const imagePath = `./${product.src}.png`;
    
            const image = images(imagePath);

            return (
                <CartProductsStyled key={product.id} name={product.name} image={image} price={product.price} newprice={product.newprice} id={product.id} src={product.src}/>
            )
        })}

        </ProductsContainer>

    );  
}

export default CartProducts;
