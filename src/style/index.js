import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;

}

p{
    font-size: 1.7rem;
}

body{
    background-color: #1f1f1f;
    color: #f5f5f5;
    display: grid;
    justify-items: center;
    color: #a80053;
}

h1{
    font-size: 2.75rem;
    color: #a80053;
}
input[type="range"] {
  margin-top: 25px;
  appearance: none;
  width: 200px;
  height: 40px;
  background-color: transparent;
  border-radius: 10px;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8px;
  cursor: pointer;
  background-color: #2f2f2f;
  border-radius: 10px;
}

input[type="range"]::-moz-range-track {
  width: 100%;
  height: 8px;
  cursor: pointer;
  background-color: #2f2f2f;
  border-radius: 10px;
}

input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -6px;
  border: 2px solid #a80053;
  background-color: #a80053;
}

input[type="range"]::-webkit-slider-thumb:after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background-color: #a80053;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

input[type="range"]:hover::-webkit-slider-thumb:after {
  opacity: 1;
}

`;

export const Container = styled.div`
  width: auto;
  margin-top: 22vh;
  display: grid;
  justify-items: center;
`;

export const CircleDiv = styled.div`
  margin-top: 30px;
  width: 200px;
  height: 200px;
  background-color: #2f2f2f;
  border: solid 5px #a80053;
  border-radius: ${(props) => props.borderRadius}px;
`;
