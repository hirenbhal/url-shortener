import React from "react";
import styled from "styled-components";
import Vector from "../Images/illustration-working.svg";

const Jumbotron = () => {
  return (
    <Jcontainer>
      <Content>
        <Heading>
          More than just
          <br /> shorter links
        </Heading>
        <Para>
          Build your brand recognition and get detailed
          <br /> insights on how your links are performing
        </Para>
        <Button>Get Started</Button>
      </Content>
      <Image src={Vector} alt="" />
    </Jcontainer>
  );
};


const Jcontainer = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
margin-bottom:1rem;
padding:3rem 0;
@media (max-width: 1080px) {
  display:flex;
  flex-direction:column-reverse;
  justify-content:center;
  align-items:center;
}
`;

const Content = styled.div`
margin-left:auto;
@media (max-width: 1080px) {
  text-align:center;
  margin:0;
}
`;

const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  letter-spacing: -4px;
  padding-top:5rem;
  line-height:80px;
  color: #3b3054;
  font-size: 80px;
  @media (max-width: 1080px) {
    font-size: 50px;
    line-height:60px;
  }
`;

const Para = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: grey;
`;

const Button = styled.button`
    font-family: "Poppins", sans-serif;
  font-weight: 600;
  border:none;
  color: white;
  background-color: #2acfcf;
  border-radius: 20px;
  margin-top:20px;
  padding: 7px 20px;
  cursor: pointer;
  transition: 0.3s;
&:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`

const Image = styled.img`
    width:50%;
    object-fit:contain;
    object-position:150px 0%;
    @media (max-width: 1080px) {
      width:100%;
      object-fit:contain;
      object-position:50px 0%;
    }
`;

export default Jumbotron;
