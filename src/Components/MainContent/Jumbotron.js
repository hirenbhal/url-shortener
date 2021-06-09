import React from "react";
import Vector from "../Images/illustration-working.svg";

import {
  Jcontainer,
  Content,
  Heading,
  Para,
  Button,
  Image,
} from "./JumbotronStyles";

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

export default Jumbotron;
