import styled from "styled-components";

export const CenterContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SubLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SocialLogos = styled.div`
margin:2rem 0;
`;

export const Logo = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: white;
  cursor: pointer;
  margin:2rem 1rem;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding:2rem;
  justify-content: space-around;
  background-color: #232127;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Link = styled.a`
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

export const Content = styled.a`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: grey;
  cursor:pointer;
  &:hover{
    color:cyan;
  }
`;

export const SocialIcons = styled.img`
  margin: 1rem;
  cursor: pointer;
  &:hover {
    fill: #2acfcf;
  }
`;
