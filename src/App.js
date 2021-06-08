import React from 'react';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';

const App = () => {
  return (
    <div>
       <Navbar />
      <Jumbotron />
    </div>
     
    
  );
}

export const Container = styled.div`
margin:3rem 2rem;
padding:0 10rem;
`



export default App;
