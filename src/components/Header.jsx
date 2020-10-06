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
    box-shadow: 0 7px 15px -8px rgba(25,4,69,0.1);
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