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
        <SubLinks>
          <Link>Features</Link>
          <Content>Link Shortening</Content>
          <Content>Branded Links</Content>
          <Content>Analytics</Content>
        </SubLinks>

        <SubLinks>
          <Link>Resources</Link>
          <Content>Blog</Content>
          <Content>Developers</Content>
          <Content>Support</Content>
        </SubLinks>
        <SubLinks>
          <Link>Company</Link>
          <Content>About</Content>
          <Content>Our Team</Content> 
          <Content>Careers</Content>
          <Content>Contact</Content>
        </SubLinks>
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
  display: flex;
  align-items:center;
  justify-content:center;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

const SubLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SocialLogos = styled.div`
margin:2rem 0;
`;

const Logo = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: white;
  cursor: pointer;
  margin:2rem 1rem;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom:2rem;
  justify-content: space-around;
  background-color: #232127;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
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

const Content = styled.a`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: grey;
  cursor:pointer;
  &:hover{
    color:cyan;
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
