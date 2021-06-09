import React from "react";

import {
  FooterContainer,
  Logo,
  CenterContainer,
  SubLinks,
  Link,
  Content,
  SocialLogos,
  SocialIcons,
} from "./FooterStyles";

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

export default Footer;
