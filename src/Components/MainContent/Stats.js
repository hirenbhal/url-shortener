import React from "react";

import BrandRecognition from "../Images/icon-brand-recognition.svg";
import FullyCustomizable from "../Images/icon-fully-customizable.svg";
import DetailedRecords from "../Images/icon-detailed-records.svg";

import {
  StatContainer,
  Line,
  CardsContainer,
  CardImg,
  CardTitle,
  Heading,
  Heading2,
  Card1,
  Card2,
  Card3,
  Para,
  FooterContainer,
  Button,
} from "./StatsStyles";

const Statistics = () => {
  return (
    <>
      <StatContainer>
        <Heading>Advanced Statistics</Heading>
        <Para>
          Track how your links are performing around the web with <br /> our
          advanced statistics dashboard.
        </Para>
      </StatContainer>
      <CardsContainer>
        <Line></Line>
        <Card1 primary>
          <CardImg src={BrandRecognition} />

          <CardTitle>Brand Recognition</CardTitle>
          <Para>
            Boost your recognition with each
            <br /> click. Generic links don't mean a<br /> thing. Branded links
            help instil
            <br />
            confidence in your Content.
          </Para>
        </Card1>
        <Card2>
          <CardImg src={DetailedRecords} />

          <CardTitle>Detailed Records</CardTitle>
          <Para>
            Gain insights into who is clicking your <br />
            links. Knowing when and where
            <br />
            people engage with your content
            <br />
            helps inform better decisions.
          </Para>
        </Card2>
        <Card3>
          <CardImg src={FullyCustomizable} />

          <CardTitle>Fully Customizable</CardTitle>
          <Para>
            Improve brand awareness and
            <br />
            content discoverability through
            <br />
            customizable links,supercharging
            <br />
            audience engagement.
          </Para>
        </Card3>
      </CardsContainer>
      <FooterContainer>
        <Heading2>Boost your links today</Heading2>
        <Button>Get Started!</Button>
      </FooterContainer>
    </>
  );
};

export default Statistics;
