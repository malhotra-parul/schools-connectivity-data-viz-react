import React from "react";
import styled from "styled-components";

const AppBar = styled.nav`
  color: #000;
  width: 430px;
  height: 17vh;
  padding: 20px;
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;

`;

const Title = styled.span`
  font-size: 1.7em;
  font-weight: bold;
  padding-left: 20px;
  font-family: serif;
  position: relative;


  &::after {
    content: "";
    height: 6px;
    width: 270px;
    background: #fbd671;
    position: absolute;
    bottom: 4px;
    left: 28px;
    z-index: -1;
  }
`;

const Subtitle = styled.p`
    color: #777989;
    padding: 0 20px;
    width: 430px;
    text-align: justify;
`;

const Header = () => {
  const title = "Opencity Data Analysis";

  return (
    <AppBar>
      <Title>{title}</Title>
      <Subtitle>Use open source data for Bengaluru city 
          to analyze the school's connectivity by buses.</Subtitle>
    </AppBar>
  );
};

export default Header;
