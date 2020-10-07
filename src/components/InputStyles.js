import styled from "styled-components";

export const InputBox = styled.input`
  display: inline-block;
  width: 350px;
  height: 40px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 10px 10px 10px 100px;
  transition: all 0.1s ease-out;

  &:focus {
    padding: 10px;
    transition: all 0.3s ease-out;
    transition-delay: 0.2s;
  }

  &:focus + Label{
    transform: translateY(-120%) translateX(0%);
    border-radius: 3px;
    transition: all 0.1s ease-out;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 40px;
  line-height: 40px;
  font-weight: 600;
  color: white;
  border-radius: 3px 0 0 3px;
  padding: 0 20px;
  background: #ecb241;
  transform: translateZ(0) translateX(0);
  transition: all 0.3s ease-in;
  transition-delay: 0.2s;

 
`;
