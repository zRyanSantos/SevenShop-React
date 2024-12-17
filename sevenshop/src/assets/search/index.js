import styled from "styled-components"
import searchImg from "../images/search.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const SearchContent = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    height: 2.8rem;
    padding: 0 1rem;
    border-radius: 1rem;
`

const SearchForm = styled.form` 
    display: flex;
    
`

const SearchInput = styled.input`
    width: 30rem;
    background: transparent;
    border: none;
    box-sizing: border-box;

    &:focus-visible {
        outline: none;
    }
`

const SearchButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`

const SearchImg = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
`

function Search(){
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchInput === "") {
            return;
        }else{
            navigate(`/produtos?search=${searchInput}`);
        }
      
    };

    return(
        <SearchContent>
            <SearchForm method="get" onSubmit={handleSubmit}>
                <SearchInput  type="text" placeholder="Busque aqui..." value={searchInput} onChange={(e) => {setSearchInput(e.target.value)}}/>
                <SearchButton type="submit">
                    <SearchImg src={searchImg} alt="search"/>
                </SearchButton>
            </SearchForm>
        </SearchContent>
    )
}

export default Search