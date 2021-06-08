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
      </Content>
      <Image src={Vector} alt="" />
    </Jcontainer>
  );
};

const Jcontainer = styled.div`
display:flex;
align-items-center;
justify-content:space-between;
padding-top:3rem;
`;

const Content = styled.div``;

const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  letter-spacing: -4px;
  padding-top:5rem;
  padding-left: 10rem;
  line-height:80px;
  color: #3b3054;
  font-size: 80px;
`;

const Para = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: grey;
  padding-left: 10rem;
`;

const Image = styled.img`
  width: 600px;
  height: 600px;
  object-fit: none;
  object-position: 5px 10%;
`;

export default Jumbotron;
