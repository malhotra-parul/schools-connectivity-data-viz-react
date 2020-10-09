import React, { useState } from "react";
import styled from "styled-components";
import { InputBox, Label } from "./InputStyles";

const Radius = ({setSelectedRadius}) => {
  const [radius, setRadius] = useState("");

  const onChangeRadius = (e) => {
    const input = parseInt(e.target.value);
    if(isNaN(input)){
      setRadius(1);
      setSelectedRadius(1);
    }
    else if(input < 1) {
      setRadius("");
      setSelectedRadius("");
    } else if(input >= 10){
      setRadius(10);
      setSelectedRadius(10);
    } else {
      setRadius(input);
      setSelectedRadius(input);
    }
  }

  return (
    <RadiusContainer>

      <InputBox
        type="number"
        value={radius}
        onChange={onChangeRadius}
        placeholder="Find bus stops within 1 - 10 km"
      />
      <Label>Radius</Label>
    </RadiusContainer>
  );
};

export default Radius;

const RadiusContainer = styled.div`
padding-bottom: 40px;
position: relative;
`;
