import { deleteCartProduct } from "../../services/cart.js";
import styled from "styled-components"
import StyledLink from "../link/index.js"
import remCartImg from "../images/rem-to-cart.png"


const ProductsList = styled.ol`
    display: flex;
    justify-content: center;
    list-style: none;
    border-radius: .5rem;
`

const Product = styled.li`
    background-color: rgba(46,0,78,0.5);
    display: flex;
    flex-direction: column;
    padding: .8rem;
    margin: .5rem;
    height: 30rem;
    width: 24rem;
    border-radius: .5rem;
    transition: all .7s;

    &:hover {
        box-shadow: 1px 0px 5px 5px rgba(89, 0, 161, 0.2);
    }
`

const Description = styled.div`
    line-height: 1.25rem;
    padding: .8rem;
    text-align: left;
    color: white;
`

const ProductName = styled.h4`
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: .8rem;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`

const ProductPrice = styled.h5`
    color: rgb(214, 214, 214);
    text-decoration: line-through;
`

const ProductNewPrice = styled.h3`
    font-size: 1.3rem;
    color: rgb(0, 183, 255);
    padding: 0;
    margin: 0;
    margin-top: 0.125rem;
    margin-bottom: 0.125rem;
`

const PayMethod = styled.h6`
    margin: 0;
    padding: 0;
    margin-bottom: 2.5rem;
`

const ProductBuyContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: .5rem;
    align-items: center;
    border-radius: .5rem;
    text-align: center;
    width: 100%;
    border-radius: .5rem;
    transition: all .7s;
`

const ProductBuyButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(109, 0, 156, 0.5);
    font-family: Poppins, sans-serif;
    font-size: 1rem;
    height: 3rem; 
    font-weight: bold;
    border: none;
    width: 80%;
    border-radius: .5rem;
    transition: all .7s;

    &:hover {
        background: linear-gradient(315deg, rgba(46,0,78,0.5) 30%, rgba(125,0,180,0.5) 100%);
        cursor: pointer;
    }
`

const ProductImg = styled.img`
    margin: auto;
    max-height: 10rem;
    max-width: 10rem;
`

const ButtonCartContainer = styled.button`
    display: flex;
    justify-content: center;
    border: none;
    align-items: center;
    background-color: rgba(109, 0, 156, 0.5);
    width: 20%;
    border-radius: .5rem;
    height: 3rem;
    transition: all .7s;

    &:hover {
        background: linear-gradient(315deg, rgba(46,0,78,0.5) 30%, rgba(125,0,180,0.5) 100%);
        cursor: pointer;
    }
`

const ButtonCart = styled.img`
    width: 1.5rem;
`

function CartProductsStyled({name, image, price, newprice, src, id}) {
    async function delCartProduct(productId) {
        await deleteCartProduct(productId);
        window.location.reload()
    }

    return(
        <ProductsList>
            <Product key={id}>

                <ProductImg src={image} alt={src}/>

                <Description>
                    <ProductName>
                        {name}
                    </ProductName>
                    <ProductPrice>
                        {price}
                    </ProductPrice>
                    <ProductNewPrice>
                        {newprice}
                    </ProductNewPrice>
                    <PayMethod>
                        Á vista
                    </PayMethod>

                    <ProductBuyContainer>
                        <ProductBuyButton>
                            <StyledLink>
                                COMPRAR
                            </StyledLink>
                        </ProductBuyButton>

                        <ButtonCartContainer onClick={() => {
                            delCartProduct(id)
                        }}>
                            <ButtonCart src={remCartImg} alt="Cart Icon"/>
                        </ButtonCartContainer>

                    </ProductBuyContainer>
                </Description>

            </Product>
        </ProductsList>
    )
}

export default CartProductsStyled