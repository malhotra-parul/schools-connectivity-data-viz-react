import React, { useState } from "react";
import styled from "styled-components";
import Autocomplete from "./Autocomplete";
import Radius from "./Radius";
import * as schools from "../data/schools.json";

           
const Sidebar = ({onSetSchool, onSetRadius}) => {


  const listOfSchools = schools.features
    .filter((schoolResult) => {
      const empty = schoolResult.geometry;
      return !(Object.keys(empty).length === 0 && empty.constructor === Object);
    })
    .map((school) => {
      return {
        geometry: school.geometry,
        name: school.properties.name,
        address: school.properties.address_full,
      };
    });

  const setSelectedSchool = (value) => {
    onSetSchool(value);
  };

  const setSelectedRadius = (value) => {
    onSetRadius(value);
  }

  return (
    <Wrapper>
      <Autocomplete
        suggestions={listOfSchools}
        setSelectedSchool={setSelectedSchool}
      />
      <Radius setSelectedRadius={setSelectedRadius}/>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  height: 87vh;
  width: 430px;
  grid-row: 2;
  grid-column: 1/ -1;
  display: grid;
  grid-column: 1;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding-left: 20px;
  padding-top: 60px;
  -webkit-box-shadow: 5px 5px 11px 0px rgba(50, 50, 50, 0.24);
  -moz-box-shadow: 5px 5px 11px 0px rgba(50, 50, 50, 0.24);
  box-shadow: 5px 5px 11px 0px rgba(50, 50, 50, 0.24);
`;
