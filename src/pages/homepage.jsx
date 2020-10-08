import React, { } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Maps from "../components/Maps"
import styled from "styled-components"

const homepage = () => {
    return (
        <Page >
            <Header />
            <Sidebar />
            <Maps />
            <Footer />
        </ Page>
    )
}

export default homepage;

const Page = styled.div`
    display: grid;
    grid-template-rows: 110px calc(100% - 110px -5px);
    grid-template-columns: 430px calc(100% - 438px); 
    grid-gap: 0.4em;
`
