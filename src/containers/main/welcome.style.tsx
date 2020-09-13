import styled from "styled-components";
import bgImage from "./assets/cover.jpeg";
export const Cover = styled.section`
  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: brightness(0.5);
  }
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #cccccc;

  #title {
    text-align: center;
    z-index: 1;

    h1,
    h2 {
      font-family: "Montserrat", sans-serif;
      color: white;
      text-transform: uppercase;
    }

    h1 {
      margin-top: 0;
      font-size: 90px;
      &::first-letter {
        font-size: 1.5em;
      }
      margin-bottom: 0;
    }
    h2 {
      color: rgb(196, 196, 196);
      margin-top: 0;
      font-size: 40px;
    }
    #down_arrow {
      z-index: 1;
      height: 100px;
      animation: float 0.5s alternate infinite;
      cursor: pointer;
    }
    @keyframes float {
      0% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(10px);
      }
    }
  }
`;

export const Header = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    text-align: center;
    text-transform: uppercase;
    display: block;
    margin: 0.5em;
    font-size: 3em;
  }
  iframe {
    border-radius: 5px;
    margin: auto;
    width: 50vw;
    height: 50vh;
  }
`;
export const Description = styled.div`
  padding: 8em;
  padding-top: 1em;
  section {
    margin: 3em 0;
    h2 {
      margin-bottom: 2em;
      text-transform: uppercase;
      letter-spacing: 0.5em;
      font-weight: 400;
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
  #quienes_somos {
    div {
      display: flex;
      flex-direction: row;
    }
    p {
      margin: auto 0;
      text-align: left;
    }
  }
  #quienes_somos_img {
    float: left;
    height: 300px;
    border-radius: 5px;
    margin-right: 2em;
  }
`;
