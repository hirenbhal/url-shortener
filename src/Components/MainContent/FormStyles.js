import styled from "styled-components";

export const InputContainer = styled.div`
  margin: auto;
  margin-bottom:2rem;
  width: 60%;
  border-radius: 15px;
  padding: 3rem 2rem;
  background-color: #3b3054;
  @media (max-width: 900px) {
    text-align:center;
    width:80%;
    margin:auto;
  }
`;

export const InputForm = styled.form`
  display: flex;
  flex-direction:row;
  justify-content: space-around;
  @media (max-width:1222px){
    display: flex;
    width:100%;
    flex-direction:column;
    align-items:center;
  }
`;

export const Input = styled.input`
  width:80%;
  font-family: "Poppins", sans-serif;
  color: #3b3054;
  border: none;
  padding:1rem 1rem;
  border-radius: 4px;
  outline:${props => props.danger ? "none" : "crimson"};
  text-decoration: none;
  @media (max-width:900px){
    width:90%;
    max-width:90%;
    padding:1rem 1rem;
    margin-bottom:1rem;
  }
 
`;

export const URLContainer = styled.div`
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 13rem 1rem 13rem;
  padding: 1rem;
  border-radius:5px;
  background-color: white;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 900px) {
    width:80%;
    margin:1rem 1rem;
    flex-direction: column;
    justify-content:center;
    align-items:flex-start;
  }
`;

export const Error = styled.p`
  font-family: "Poppins", sans-serif;
  color: crimson;
  text-align:center;
`;

export const Loading = styled.h2`
  font-family: "Poppins", sans-serif;
  color: #3b3054;
  text-align:center;
`;

export const ShortenButton = styled.button`
font-family: "Poppins", sans-serif;
border:none:
font-type:bold;
font-size:20px;
font-weight:500;
border:none;
color: white;
background-color: #2acfcf;
border-radius: 4px;
padding: 7px 20px;
margin-bottom:0 0 0 1rem;
cursor: pointer;
transition: 0.3s;
&:hover{
    box-shadow: 0 20px 16px 0 rgba(0,0,0,0.2);
}
@media (max-width:900px){
  width:90%;
  
}
`;
export const CopyButton = styled.button`
font-family: "Poppins", sans-serif;
border:none:
font-type:bold;
font-weight:700;
border:none;
color: white;
background-color: #2acfcf;
border-radius: 4px;
padding: 7px 20px;
cursor: pointer;
transition: 0.3s;
&:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}@media (max-width: 900px) {
  padding:0.5rem 8rem;
}
`;

export const OriginalURL = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
`;

export const ShortURL = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #2acfcf;
  padding:0 2rem;
  @media (max-width: 900px) {
    padding:1rem 0;
  }
`;

export const NewURL = styled.div`
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  align-items: center;
  justify-content:space-between;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    padding:0;
    margin:0;
  }
`;