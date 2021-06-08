import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
      <NavContainer>
          <Nav>
        <Links>
        <Logo>Shortly</Logo>
        <Link>Features</Link>
        <Link>Pricing</Link>
        <Link>Resources</Link>
        </Links>
        <Links>
        <Link>Login</Link>
        <Link2>Sign up</Link2>
        </Links>
    </Nav>
      </NavContainer>
    
  );
};

const NavContainer = styled.div`
margin:2rem auto;
padding:0 10rem;
`

const Nav = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
`;

const Logo = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: #3b3054;
  cursor: pointer;
  margin-right:1rem;
`;

const Links = styled.div`
display:flex;
align-items:center;
`

const Link = styled.a`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin: 0 1rem;
  padding:0 0.5rem;
  color: grey;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &:hover{
      color:#3b3054;
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
  transition: all 0.3s ease 0s;
`;

export default Navbar;
