import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
      <NavContainer>
        

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

        <Hamburger>
          <Bar></Bar>
          <Bar></Bar>
          <Bar></Bar>
        </Hamburger>

      </NavContainer>
    
  );
};

const NavContainer = styled.div`
display:flex;
justify-content:space-around;
margin:2rem 0;
`

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

@media only screen and (max-width: 768px) {
  
  position: fixed;
  left: -100%;
  top: 5rem;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  border-radius: 10px;
  text-align: center;
  transition: 0.3s;
  box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
}

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
  @media only screen and (max-width: 768px) {
    margin:2.5rem 0;
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
`;

const Bar = styled.span`
display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #101010;
`

const Hamburger = styled.div`
display: none;
@media only screen and (max-width: 768px) {
  display: block;
      cursor: pointer;
}
`

export default Navbar;
