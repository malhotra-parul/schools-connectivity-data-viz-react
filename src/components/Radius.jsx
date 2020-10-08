import React, { useState } from "react";
import styled from "styled-components";
import { InputBox, Label } from "./InputStyles";

const Radius = () => {
  const [radius, setRadius] = useState("");

  const onChangeRadius = (e) => {
    const input = parseInt(e.target.value);
    console.log(input);
    if(input < 1) {
      setRadius("");
    } else if(input >= 10){
      setRadius(10);
    } else {
      setRadius(input);
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
