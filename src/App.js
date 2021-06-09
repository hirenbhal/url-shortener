import React from "react";
import styled from "styled-components";
import Navbar2 from "./Components/Navbar2";
import Jumbotron from "./Components/Jumbotron";
import Form from "./Components/Form";
import Statistics from "./Components/Statistics";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar2 />
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
