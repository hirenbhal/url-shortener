import React from "react";
import styled from "styled-components";

import Facebook from "../Images/icon-facebook.svg";
import Pinterest from "../Images/icon-pinterest.svg";
import Twitter from "../Images/icon-twitter.svg";
import Instagram from "../Images/icon-instagram.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <Logo>Shortly</Logo>
      <CenterContainer>
        <Link>Features</Link>
        <Link>Resources</Link>
        <Link>Company</Link>
      </CenterContainer>

      <SocialLogos>
        <SocialIcons src={Facebook} />
        <SocialIcons src={Twitter} />
        <SocialIcons src={Pinterest} />
        <SocialIcons src={Instagram} />
      </SocialLogos>
    </FooterContainer>
  );
};

const CenterContainer = styled.div`
display:flex;
`;

const SocialLogos = styled.div``;

const Logo = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: white;
  cursor: pointer;
  margin-right: 1rem;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #232127;
`;

const Link = styled.a`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin: 0 2rem;
  padding: 0 0.5rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &:hover {
    color: #3b3054;
  }
`;

const SocialIcons = styled.img`
  margin: 1rem;
  cursor: pointer;
  &:hover {
    fill: #2acfcf;
  }
`;

export default Footer;
