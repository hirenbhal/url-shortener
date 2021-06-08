import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

const shorten = axios.create({
  baseURL: "https://api.shrtco.de/v2/",
});

const Form = () => {
  const [URL, setURL] = useState("");
  const [newURLs, setNewURLs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const checkURL = (URL) => {
    if (URL.length === 0) {
      setError("Please add a Link");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setURL(e.target.value);
    if (checkURL(URL)) {
      shortenURL();
    }
  };

  const shortenURL = async () => {
    setLoading(true);
    await shorten
      .get(`shorten?url=${URL}`)

      .then((response) => {
        setLoading(false);
        var shortenedURL = response.data.result.short_link;

        setNewURLs([
          ...newURLs,
          {
            prev: URL,
            new: shortenedURL,
          },
        ]);
        console.log(newURLs);
        setURL("");
      })
      .catch((err) => {
        setError("This URL is disallowed, try another URL");
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <>
      {loading ? <Loading>Getting URL,please wait...</Loading> : ""}

      <InputContainer>
        <InputForm onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="text"
            placeholder="Shorten a Link here"
            value={URL}
            onChange={(e) => {
              setURL(e.target.value);
              setError("");
            }}
          />
          {error ? <Error>{error}</Error> : ""}

          <Button onClick={(e) => handleSubmit(e)}>Shorten!</Button>
        </InputForm>
      </InputContainer>

      {newURLs.map((newURL) => {
        return (
          <URLContainer>
            <OriginalURL>{newURL.prev}</OriginalURL>
            <NewURL>
              <ShortURL>{newURL.new}</ShortURL>
              <CopyToClipboard text={newURL.new}>
                <Button>Copy</Button>
              </CopyToClipboard>
            </NewURL>
          </URLContainer>
        );
      })}
    </>
  );
};

const InputContainer = styled.div`
  margin: 5rem 13rem 2rem 13rem;
  border-radius: 15px;
  padding: 3rem;
  background-color: #3b3054;
`;

const InputForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  padding: 0 10rem;
  border: none;
  border-radius: 4px;
  text-decoration: none;
`;

const URLContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 13rem 1rem 13rem;
  padding: 1rem;
  background-color: white;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Error = styled.p`
  font-family: "Poppins", sans-serif;
  color: Red;
`;
const Loading = styled.h2`
  font-family: "Poppins", sans-serif;
  color: #3b3054;
`;

const Button = styled.button`
font-family: "Poppins", sans-serif;
border:none:
font-weight: 700;
border:none;
color: white;
background-color: #2acfcf;
border-radius: 10px;
padding: 7px 20px;
margin-left:2rem;
cursor: pointer;
transition: 0.3s;
&:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`;

const OriginalURL = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
`;

const ShortURL = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
`;

const NewURL = styled.div`
  display: flex;
  align-items: center;
  color: #2acfcf;
`;

export default Form;
