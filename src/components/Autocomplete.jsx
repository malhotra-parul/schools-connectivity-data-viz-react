import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { InputBox, Label } from "./InputStyles";

const Autocomplete = ({ suggestions, setSelectedSchool }) => {
  const [activeSuggestion, setActiveSuggestion] = useState(null);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [userInput, setUserInput] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    let filtered;
    if (userInput.length >= 3) {
      filtered = suggestions
        .filter((suggestion) => {
          return suggestion.name
            .toLowerCase()
            .includes(userInput.toLowerCase());
        })
        .slice(0, 10);
    }

    let timerId = setTimeout(() => {
      setFilteredSuggestions(filtered);
    }, 2000);

    return () => clearTimeout(timerId);
  }, [userInput, suggestions]);

  useEffect(()=>{
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = (event)=> {
    const {current: wrap} = wrapperRef;
    if(wrap && !wrap.contains(event.target)){
      setShowSuggestion(false);
    }
  };

  const onChange = (e) => {
    setActiveSuggestion(null);
    setShowSuggestion(true);
    setUserInput(e.target.value);
  };

  const onClick = (e) => {
    const selected = suggestions.filter((suggestion) => {
      return suggestion.name === e.currentTarget.innerText;
    });
    setSelectedSchool(selected);
    setActiveSuggestion(null);
    setFilteredSuggestions([]);
    setShowSuggestion(false);
    setUserInput(e.currentTarget.innerText);
  };

  const onKeyDown = (e) => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      setActiveSuggestion(null);
      setShowSuggestion(false);
      setUserInput(filteredSuggestions[activeSuggestion].name);

    } else if (e.keyCode === 40) {
    
      if (activeSuggestion === filteredSuggestions.length - 1) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
      setShowSuggestion(true);

    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
      setShowSuggestion(true);
    }
  };

  return (
    <SchoolWrapper ref={wrapperRef} >
   
      <InputBox
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
        placeholder="Search for a school"
      />
      <Label>School</Label>
      {showSuggestion && userInput.length >= 3 && filteredSuggestions && (
        <Suggestions>
          {filteredSuggestions.length ? (
            filteredSuggestions.map((suggestion, index) => (
              <List
                tabIndex="-1"
                index={index}
                key={index}
                className={
                  activeSuggestion === index ? "suggestion-active" : ""
                }
                onClick={onClick}
              >
                {suggestion.name}
              </List>
            ))
          ) : (
            <NoSuggestions>
              <em>No match found! Try again!</em>
            </NoSuggestions>
          )}
        </Suggestions>
      )}
    </SchoolWrapper>
  );
};

Autocomplete.propTypes = {
  suggestions: PropTypes.instanceOf(Array)
};

Autocomplete.defaultProps = {
  suggestions: []
};

export default Autocomplete;

const SchoolWrapper = styled.div`
padding-bottom: 60px;
position: relative;
`;

const NoSuggestions = styled.div`
   color: #999;
   height: 30px;
   display: flex;
   justify-content: center;
   align-items: center;
   line-height: 40px;
    font-weight: 600;
    font-size: 12px;
    
`;

const Suggestions = styled.ul`
  border: 1px solid lightgray;
  border-top-width: 0;
  border-radius: 3px;
  list-style: none;
  margin-top: 0;
  max-height: auto;
  overflow-y: auto;
  padding-left: 0;
  width: 350px;

`;

const List = styled.li`
    padding: 0.5rem;
    border-bottom: 1px solid lightgray;
    color: #383a42;
   height: 30px;
   display: flex;
   justify-content: center;
   align-items: center;
   line-height: 40px;
    font-weight: 600;
    font-size: 12px;

    &:hover{
      background-color: #ecb241;
      color: #383a42;
      cursor: pointer;
      font-weight: 800;
    }
`