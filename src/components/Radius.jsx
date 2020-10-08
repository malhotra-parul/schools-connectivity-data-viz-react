import React, { useState } from "react";
import styled from "styled-components";
import { InputBox, Label } from "./InputStyles";

const Radius = () => {
  const [radius, setRadius] = useState(null);

  return (
    <RadiusContainer>

      <InputBox
        type="number"
        value={radius}
        onChange={(e) => setRadius(e.target.value)}
        placeholder="Find bus stops within the radius (km)"
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
