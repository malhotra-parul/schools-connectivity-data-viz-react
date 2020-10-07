import React, { useState } from "react";
import styled from "styled-components";
import Autocomplete from "./Autocomplete";
import Radius from "./Radius";
import * as schools from "../data/schools.json";

const Main = () => {
  const [school, setSchool] = useState(null);
  const [loading, setLoading] = useState(false);

  const listOfSchools = schools.features
  .filter((schoolResult) => {
    const empty = schoolResult.geometry;
    return !(Object.keys(empty).length === 0 && empty.constructor === Object);
  })
  .map((school) => {
    return {
      geometry: school.geometry,
      name: school.properties.name,
      address: school.properties.address_full
    };
  });

  const setSelectedSchool = (value) => {
    setSchool(value);
  }

  return (
    <Wrapper>
      <InputWrapper>
      <Autocomplete suggestions={listOfSchools}
                    setSelectedSchool={setSelectedSchool}/>
      <Radius />
      </InputWrapper> 
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  height: 77vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 430px calc(100% - 430px);
  grid-gap: 2em;
  box-shadow: 0 7px 15px -8px rgba(25, 4, 69, 0.1);
  margin: 0 auto;
`;

const InputWrapper = styled.div`
grid-column: 1;
display: flex;
flex-direction: column;
justify-content: start;
align-items: flex-start;
padding-left: 20px;
padding-top: 80px;
-webkit-box-shadow: 5px 5px 11px 0px rgba(50, 50, 50, 0.24);
-moz-box-shadow:    5px 5px 11px 0px rgba(50, 50, 50, 0.24);
box-shadow:         5px 5px 11px 0px rgba(50, 50, 50, 0.24);
`;
