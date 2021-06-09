import React from "react";
import styled from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import Jumbotron from "./Components/MainContent/Jumbotron";
import Form from "./Components/MainContent/Form";
import Statistics from "./Components/MainContent/Stats";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Background>
        <Form />
        <Statistics />
        <Footer />
      </Background>
    </div>
  );
};

const Background = styled.div`
  background-color: #eff1f7;
`;

export const Container = styled.div`
  margin: 3rem 2rem;
  padding: 0 10rem;
`;

export default App;
