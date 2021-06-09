import React, { useState } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  InputContainer,
  InputForm,
  Input,
  URLContainer,
  Error,
  Loading,
  ShortenButton,
  CopyButton,
  OriginalURL,
  ShortURL,
  NewURL,
} from "./FormStyles";

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
        setURL("");
      })
      .catch((err) => {
        setError("This URL is disallowed, try another URL");
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? (
        <Loading>URL shortening is in progress, Please wait...</Loading>
      ) : (
        ""
      )}

      <InputContainer>
        {error ? <Error>{error}</Error> : ""}
        <InputForm onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="text"
            placeholder="Shorten a Link here"
            value={URL}
            danger
            onChange={(e) => {
              setURL(e.target.value);
              setError("");
            }}
          />
          <ShortenButton onClick={(e) => handleSubmit(e)}>
            Shorten!
          </ShortenButton>
        </InputForm>
      </InputContainer>

      {newURLs.map((newURL) => {
        let subStr;
        if (newURL.prev.length > 26) {
          subStr = newURL.prev.substring(0, 26);
          subStr = subStr + "...";
        } else {
          subStr = newURL.prev;
        }
        return (
          <URLContainer>
            <OriginalURL>{subStr}</OriginalURL>
            <NewURL>
              <ShortURL>{newURL.new}</ShortURL>
              <CopyToClipboard text={newURL.new}>
                <CopyButton>Copy</CopyButton>
              </CopyToClipboard>
            </NewURL>
          </URLContainer>
        );
      })}
    </>
  );
};

export default Form;
