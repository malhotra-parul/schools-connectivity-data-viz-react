import React from "react";
import styled from "styled-components"

const Card = ({ busStop, onClickCard }) => {
  const onClick = (e) => {
    onClickCard(busStop);
  };
  return (
    <CardDiv className="card" onClick={onClick}>
      <p>
        <Em>{busStop.properties.name}</Em>
      </p>
    </CardDiv>
  );
};

export default Card;

const CardDiv = styled.div`
  height: 150px;
  min-width: 150px;
  padding: 0;
  margin: 0;
  width: 150px;
  border-right: 1px solid #727375;
  color: #777999;
  background: #EDEFF1;
  display: grid;
  place-items: center;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.24);
  -moz-box-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.24);
  box-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.24);
  &:hover{
    transform: scale(1.1);
    background: #ecb241;
    color: #000;
    cursor: pointer;
  }
`;

const Em = styled.em`
    word-break: keep-all;
    text-underline-position: under;
    text-decoration: underline;
    text-decoration-color: #fbd671;
    font-size: 12px;
`;




