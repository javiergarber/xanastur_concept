import styled from "styled-components";
export const Nav = styled.nav`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  ul {
    margin-top: 0;
    list-style-type: none;
    border-bottom: solid 1px rgb(224, 224, 224);

    li {
      display: inline-block;
      padding: 1.5em 2em;
      position: relative;
      cursor: pointer;
      transition: 0.3s;
      padding: 0;

      .customLink {
        display: block;
        color: black;
        padding: 24px 24px;
        text-decoration: none;
      }
      :hover {
        position: relative;
        background-color: rgb(246, 245, 238);
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          height: 4px;
          background-color: black;
          animation: grow 0.3s;
        }
        @keyframes grow {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
      }
    }
  }
`;

export const WelcomeLink = styled.div`
  cursor: pointer;
  float: left;
  margin: 7px 1em;
  img {
    height: 50px;
    width: 50px;
    margin-top: auto;
  }
`;
