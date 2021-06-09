import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav isOpen = {isOpen}>
      <Logo isOpen={isOpen}>
        Shortly
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen) } isOpen={isOpen}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
      <Link isOpen={isOpen}>Features</Link>
        <Link isOpen={isOpen}>Pricing</Link>
        <Link isOpen={isOpen}>Resources</Link>
        <Link isOpen={isOpen}>Login</Link>
        <Link2>Sign up</Link2>
      </Menu>
    </Nav>
  );
};

export default Navbar;


const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-top:1rem;
  background: ${props => props.isOpen ? "#3b3054":"white"};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.h1`
font-family: "Poppins", sans-serif;
font-weight: 700;
color: ${props => props.isOpen ? "white": "#3b3054"};
cursor: pointer;
margin-right:1rem;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 4px;
    width: 25px;
    background: ${props => props.isOpen ? "white": "#3b3054"};
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Link = styled.a`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin: 0 1rem;
  padding:0 0.5rem;
  color: ${({ isOpen }) => (isOpen ? "white" : "grey")};
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &:hover{
      color:#3b3054;
  }

  @media (max-width:768px){
    padding:1rem;
    &:hover{
        color:cyan;
    }
  }
`;

const Link2 = styled.a`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: white;
  background-color: #2acfcf;
  border-radius: 20px;
  padding: 7px 20px;
  cursor: pointer;
  transition: 0.3s;
&:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
@media (max-width:768px){
    margin:1rem;
    padding:7px 120px;
  }
`;