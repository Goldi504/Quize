import styled, { createGlobalStyle } from 'styled-components';
const BGImage = new URL("./images/background.jpg", import.meta.url).href;

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  body {
    min-height: 100vh;

    background-image: url(${BGImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    font-family: Arial, sans-serif;

    /* Prevent page scrolling */
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px 20px;

  overflow: hidden;

  .score {
    color: #ffffff;

    font-size: 26px;
    font-weight: 700;

    margin: 5px 0 12px;
  }

  h1 {
    font-family: 'Fascinate Inline', cursive;

    background-image: linear-gradient(
      180deg,
      #ffffff,
      #87f1ff
    );

    font-weight: 400;

    background-size: 100%;
    background-clip: text;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    filter: drop-shadow(2px 2px #0085a3);

    font-size: 62px;

    text-align: center;

    margin: 5px 0 5px;
  }

  .start,
  .next {
    cursor: pointer;

    background: linear-gradient(
      180deg,
      #ffffff,
      #ffcc91
    );

    color: #111111;

    border: 2px solid #d38558;

    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);

    border-radius: 9px;

    height: 40px;

    margin: 10px 0;

    padding: 0 30px;

    font-size: 16px;

    font-weight: 700;
  }

  .start:hover,
  .next:hover {
    transform: translateY(-1px);
  }

  .start {
    max-width: 180px;
  }
`;