import styled from "styled-components";
export const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: black;
  border: solid 2px rgb(143, 137, 106);
  border-radius: 5px;
  padding: 1em 3em;
  font-weight: 600;

  .button_icon {
    height: 2em;
    margin-right: 1em;
  }
  :hover {
    background-color: rgb(143, 137, 106);
    color: white;
    .button_icon {
      fill: white;
    }
  }
`;
