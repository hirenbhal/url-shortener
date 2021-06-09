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
            <Line></Line>
        <Card1>

            <CardImg src={BrandRecognition} />
    
            <CardTitle>Brand Recognition</CardTitle>
            <Para>Boost your recognition with each<br/> click.
                Generic links don't mean a<br/> thing. Branded links help instil<br/>
                confidence in your Content.
            </Para>
        </Card1>
        <Card2>
            <CardImg src={DetailedRecords} />
    
            <CardTitle>Detailed Records</CardTitle>
            <Para>Gain insights into who is clicking your <br />
            links. Knowing when and where<br/>people engage
            with your content<br/>helps inform better decisions.</Para>
        </Card2>
        <Card3>
            <CardImg src={FullyCustomizable} />
    
            <CardTitle>Fully Customizable</CardTitle>
            <Para>Improve brand awareness and<br/>content discoverability
            through<br/>customizable links,supercharging<br/>audience engagement.</Para>
        </Card3>
        </CardsContainer>
        <FooterContainer>
        <Heading2>
            Boost your links today
        </Heading2>
        <Button>Get Started!</Button>
        </FooterContainer>
        </>
    )
}

const StatContainer = styled.div`
text-align:center;
margin-bottom:15rem;
`
const Line = styled.div`
background-color:#2acfcf;
height:10px;
width:70%;
margin:0 auto;
@media (max-width:375px){
    width:10px;
    height:80%;
    position:absolute;
    left:50%;
    z-index:1;
}
`

const CardsContainer = styled.div`
position:relative;
border:2px solid red;
display:flex;
margin:0 auto 15rem auto;
top:50%;
left:50%;
transform:translate(-45%,-50%);
flex-direction:row;
flex-wrap:wrap;
@media (max-width:375px){
   margin-top:100rem;
}
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
  @media (max-width: 496px) {
    line-height:50px;
    padding-bottom:1rem;
  } 
`;

const Heading2 = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  letter-spacing: -1px;
  padding:5rem 1rem 0rem 1rem ;
  line-height:80px;
  color: white;
  font-size: 50px;
`;

const Card1 = styled.div`
position:absolute;
display:flex;
flex-direction:column;
align-items:center;
background-color:White;
margin:0 0 5rem 0;
left:2rem;
top:-9rem;
width:373px;
padding-bottom:2rem;
transition: 0.3s;
&:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

@media (max-width:375px){
    position:static;
    z-index:2;
}

`
const Card2 = styled.div`
position:absolute;
display:flex;
flex-direction:column;
align-items:center;
left:525px;
top:-6rem;
background-color:White;
margin:0 0 5rem 0;
width:373px;
padding-bottom:2rem;
transition: 0.3s;
&:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

@media (max-width:375px){
    position:static;
    z-index:2;
}

`
const Card3 = styled.div`
position:absolute;
display:flex;
flex-direction:column;
align-items:center;
left:1000px;
top:-3rem;
background-color:White;
margin:0 0 5rem 0;
width:373px;
padding-bottom:2rem;
transition: 0.3s;
&:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

@media (max-width:375px){
    position:static;
    z-index:2;
}

`

const CardTitle = styled.p`
font-family: "Poppins", sans-serif;
font-weight: 700;
font-size:20px;
padding-top:1rem;
`


const CardImg = styled.img`
padding:1rem;
border-radius:50%;
background-color:#3b3054;
`


const FooterContainer = styled.div`
text-align:center;
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
