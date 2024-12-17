import styled from "styled-components";
import { useEffect, useState } from "react";
import { getProducts } from "../services/products.js";
import { useLocation } from "react-router-dom";
import ProductsStyled from "../assets/products/index.js";

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

function Products() {
    const [ products, setProducts ] = useState([]);
    const [ productsFiltered, setproductsFiltered ] = useState([]);
    const location = useLocation();

    const getQueryParams = () => {
      const urlParams = new URLSearchParams(location.search);
      return urlParams.get('search');
    };
  
    const searchQuery = getQueryParams();

    async function fetchProducts() {
        const productsAPI = await getProducts();
        setProducts(productsAPI);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        const productsFill = products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
        setproductsFiltered(productsFill);
    }, [searchQuery, products]);

    const images = require.context('../assets/products-images', false, /\.(png|jpe?g|gif)$/)
    
    return (

        <ProductsContainer>

        {productsFiltered.map(product => {
            const imagePath = `./${product.src}.png`;
    
            const image = images(imagePath);

            return (
                <ProductsStyled name={product.name} image={image} price={product.price} newprice={product.newprice} src={product.src} id={product.id}/>
            )
        })}
        </ProductsContainer>

    );  
}

export default Products;
