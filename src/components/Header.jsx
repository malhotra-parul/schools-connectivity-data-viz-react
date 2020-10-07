import React from 'react'
import styled from "styled-components"

const AppBar = styled.nav`
    background: #3a99cc;
    color: #fff ;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    filter: drop-shadow(0 0 0.15rem #66c1f9);
`

const Title = styled.span`
   font-size: 1.6em;
   font-weight: bold;
   padding-left: 20px;
   font-family: 'Roboto',sans-serif;
`

const Header = () => {
    const title = "Opencity Data Analysis"
    
    return (
       <AppBar>
            <Title>{title}</Title>
       </AppBar>
    )
}

export default Header