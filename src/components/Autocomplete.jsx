import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { InputBox, Label } from "./InputStyles";

const Autocomplete = ({ suggestions, setSelectedSchool }) => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [userInput, setUserInput] = useState("");

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

  const onChange = (e) => {
    setActiveSuggestion(0);
    setShowSuggestion(true);
    setUserInput(e.target.value);
  };

  const onClick = (e) => {
    const selected = suggestions.filter((suggestion) => {
      return suggestion.name === e.currentTarget.innerText;
    });
    setSelectedSchool(selected);
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestion(false);
    setUserInput(e.currentTarget.innerText);
  };

  const onKeyDown = (e) => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
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
    <SchoolWrapper >
   
      <InputBox
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
        placeholder="Search for a school"
      />
      <Label>School</Label>
      {showSuggestion && userInput.length >= 3 && filteredSuggestions && (
        <ul className="suggestions">
          {filteredSuggestions.length ? (
            filteredSuggestions.map((suggestion, index) => (
              <li
                tabIndex="-1"
                index={index}
                key={index}
                className={
                  activeSuggestion === index ? "suggestion-active" : ""
                }
                onClick={onClick}
              >
                {suggestion.name}
              </li>
            ))
          ) : (
            <div className="no-suggestions">
              <em>No suggestions, you're on your own!</em>
            </div>
          )}
        </ul>
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

// const Input = styled.input`
//    width: 250px;
//   border-radius: 5px;
//   height: 40px;
//   background: #dedfe0;
//   border: none;
//   -webkit-box-shadow: 5px 5px 5px 0px rgba(50, 50, 50, 0.24);
// -moz-box-shadow:    5px 5px 5px 0px rgba(50, 50, 50, 0.24);
// box-shadow:         5px 5px 5px 0px rgba(50, 50, 50, 0.24);
// `;

// const Label = styled.label`
//   font-size: 14px;
//   font-weight: 700;
//   font-family: 'Lato', sans-serif;
//   color: #777989;
//   position: absolute;
//   left: 40px;
// `;
