import { React, useState } from "react";
import styled from "styled-components";
import "./Language.css";

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Select = styled.select`
  background-color: transparent;
  border: none;
  padding: 5px 0px;
  font-size: 14px;
  cursor: pointer;
  color: #000;
  appearance: none;
  outline: none;
  background-image: linear-gradient(black, black);
  background-position: 100% 100%;
  background-size: ${({ isHovered }) => (isHovered ? '100%' : '0')} 1px;
  background-repeat: no-repeat;
  text-decoration: none;
  box-shadow: inset 0 -1px 1px -1px black, inset 0 -1px 1px -1px black;
  transition: background-size 0.3s ease;
`;


const Option = styled.option`
  color: #000;
`;

const Boxers = styled.div``;

const CustomArrow = styled.div`
  margin-left: 20%;
  margin-top: 20%;
  position: relative;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  z-index: 1;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #333;
  cursor: pointer;
`;

const Fcuk=styled('button')`
background:transparent;
padding:0;
margin-left:10%;
margin-top:10%;
border: none;
outline:none;
&:focus {
    outline: none;
    border: none;
  }
`

const LanguageSelectDropdown = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleArrowClick = () => {
    console.log("I am touched");
    const selectElement = document.querySelector("#fifi");
    if (selectElement) {
      selectElement.click();
    }
  };

  return (
    <DropdownContainer
      className="underline_link LanguageSelect_link__hxfGV"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Boxers id="fuli">
        <Select id="fifi" isHovered={isHovered}>
          <Option value="" selected>
            En
          </Option>
          <Option value="/es">Es</Option>
          <Option value="/pt">Pt</Option>
        </Select>
      </Boxers>
      <Fcuk><CustomArrow onClick={handleArrowClick} /></Fcuk>
    </DropdownContainer>
  );
};

export default LanguageSelectDropdown;