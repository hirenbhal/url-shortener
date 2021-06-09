import styled from 'styled-components'


export const StatContainer = styled.div`
text-align:center;
margin-bottom:15rem;
`
export const Line = styled.div`
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

export const CardsContainer = styled.div`
position:relative;
display:flex;
margin:0 auto 16rem auto;
top:50%;
left:50%;
transform:translate(-45%,-50%);
flex-direction:row;
flex-wrap:wrap;
@media (max-width:375px){
   margin-top:35rem;
   margin-bottom:0;
}
`

export const Para = styled.p`
font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: grey;
  margin-top:5px;
`

export const Heading = styled.h1`
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

export const Heading2 = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  letter-spacing: -1px;
  padding:5rem 1rem 0rem 1rem ;
  line-height:80px;
  color: white;
  font-size: 50px;
`;

export const Card1 = styled.div`
position:absolute;
display:flex;
flex-direction:column;
align-items:center;
background-color:White;
margin:0 0 5rem 0;
left:7rem;
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
export const Card2 = styled.div`
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
export const Card3 = styled.div`
position:absolute;
display:flex;
flex-direction:column;
align-items:center;
left:58rem;
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

export const CardTitle = styled.p`
font-family: "Poppins", sans-serif;
font-weight: 700;
font-size:20px;
padding-top:1rem;
`


export const CardImg = styled.img`
margin-top:1rem;
padding:1rem;
border-radius:50%;
background-color:#3b3054;
`


export const FooterContainer = styled.div`
text-align:center;
  background-color: #3b3054;
  padding-bottom:4rem;
`;

export const Button = styled.button`
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

