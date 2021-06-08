import React from 'react'
import styled from 'styled-components'
import BrandRecognition from '../Images/icon-brand-recognition.svg'
import FullyCustomizable from '../Images/icon-fully-customizable.svg'
import DetailedRecords from '../Images/icon-detailed-records.svg'

const Statistics = () => {
    return (
        <>
        <StatContainer>
            <Heading>
                Advanced Statistics
            </Heading>
            <Para>
                Track how your links are performing around the web
                with <br />  our advanced statistics dashboard.
            </Para>
        </StatContainer>
        <CardsContainer>
        <Card>
            <CardImg src={BrandRecognition} />
            <CardTitle>Brand Recognition</CardTitle>
            <Para>Boost your recognition with each<br/> click.
                Generic links don't mean a<br/> thing. Branded links help instil<br/>
                confidence in your Content.
            </Para>
        </Card>
        <Card>
        <CardImg src={DetailedRecords} />
            <CardTitle>Detailed Records</CardTitle>
            <Para>Gain insights into who is clicking your <br />
            links. Knowing when and where<br/>people engage
            with your content<br/>helps inform better decisions.</Para>
        </Card>
        <Card>
        <CardImg src={FullyCustomizable} />
            <CardTitle>Fully Customizable</CardTitle>
            <Para>Improve brand awareness and<br/>content discoverability
            through<br/>customizable links,supercharging<br/>audience engagement.</Para>
        </Card>
        </CardsContainer>
        <InputContainer>
        <Heading2>
            Boost your links today
        </Heading2>
        <Button>Get Started!</Button>
        </InputContainer>
        </>
    )
}

const StatContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-bottom:5rem;
`

const CardsContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
`

const Para = styled.p`
font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: grey;
  margin-top:5px;
`

const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  letter-spacing: -2px;
  padding-top:5rem;
  line-height:80px;
  color: #3b3054;
  font-size: 50px;
`;

const Heading2 = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  letter-spacing: -1px;
  padding-top:5rem;
  line-height:80px;
  color: white;
  font-size: 50px;
`;

const Card = styled.div`
background-color:White;
margin:0 0 5rem 0;
padding:2rem;
transition: 0.3s;
&:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`
const CardTitle = styled.p`
font-family: "Poppins", sans-serif;
font-weight: 700;
font-size:20px;
`

const CardImg = styled.img`
background-color:#3b3054;
padding:10px;
border:none;
border-radius:50%;
// object-fit:cover;
`

const InputContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;  
  background-color: #3b3054;
  padding-bottom:4rem;
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


export default Statistics
