import styled from "styled-components";
import background from "../../images/bg-shorten-desktop.svg";

export const UrlShortenerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 2rem;
  position: relative;
  bottom: 3.5rem;
`;

export const ShortenerContainer = styled.div`
  background: hsl(257, 27%, 26%) url(${background}) center center/cover;
  display: flex;
  justify-content: center;
  padding: 2rem;
  max-width: 70rem;
  border-radius: 0.5rem;
`;
export const InputShortener = styled.input`
  margin-right: 2rem;
  padding: 0.8rem;
  border-radius: 0.3rem;
  border: 1px solid hsl(0, 0%, 75%);
  font-family: "Poppins", sans-serif;
  width: 50rem;
  max-width: 70rem;

  &::placeholder {
    color: hsl(0, 0%, 75%);
    font-weight: 700;
  }
`;
