import ThemeCheckbox from "./theme-toggle/index.js"
import Logo from "../logo/index.js"
import bagImg from "../images/shopping-bag.png"
import Search from "../search/index.js"
import styled from "styled-components"
import StyledLink from "../link/index.js"

const HeaderContainer = styled.header`
    display: flex;
    height: 4.5rem;   
    align-items: center;
    justify-content: space-around;
    border: 0.4rem solid white;
    border-bottom: none;
    border-radius: 1.25rem 1.25rem 0 0;
    background-color: rgba(70, 2, 119, 0.5);
    margin: 2rem 2rem 0 2rem;
`

const HeaderLogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
`

const HeaderSearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const HeaderMenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const HeaderMenu = styled.ol`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style: none;
    font-size: 1.25rem;
    font-weight: bold;
    gap: 2rem;
    width: 20rem;
`

const HeaderMenuLi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ShoppingBag = styled.img`
    width: 2rem;
`

function Header(){
    return(
        <HeaderContainer>
            <HeaderLogoContainer>
                <Logo/>
            </HeaderLogoContainer>
                    
            <HeaderSearchContainer>
                <Search/>
            </HeaderSearchContainer>
        
            <HeaderMenuContainer>
                <HeaderMenu>
                    <HeaderMenuLi>
                        <StyledLink to="mailto:suporte@sevenshop.com.br">
                            SUPORTE
                        </StyledLink>
                    </HeaderMenuLi>
                    <HeaderMenuLi>
                        <StyledLink to="#contacts">
                            CONTATO
                        </StyledLink>
                    </HeaderMenuLi>

                    <ThemeCheckbox/>

                    <StyledLink to="/carrinho">
                        <ShoppingBag src={bagImg} alt="bag" />
                    </StyledLink>

                </HeaderMenu>

            </HeaderMenuContainer>

        </HeaderContainer>
    )
}

export default Header