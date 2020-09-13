import styled from "styled-components";
import { SIZES } from "../../theme";
export const FooterSection = styled.footer`
  background-color: rgb(143, 137, 106);

  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const UpperFooter = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2em;
  justify-content: space-between;
  @media screen and (max-width: ${SIZES.medium}) {
    flex-direction: column;
    text-align: center;
  }
`;
export const ContactInformation = styled.div`
  p {
    font-size: 12px;
    margin: 0px;
    margin-right: 1em;
    color: white;
    font-weight: 600;
    line-height: 1.5em;
  }
`;
export const Sponsors = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${SIZES.medium}) {
    margin-top: 1em;
  }

  h3 {
    margin-top: 0;
    color: white;
  }
  .images {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    img {
      margin-bottom: 1em;
      border-radius: 3px;
      width: 70px;
      height: 70px;
      margin-right: 1em;
      cursor: pointer;
      transition: 0.5s;
      :hover {
        transform: scale(1.5);
      }
    }
  }
`;

export const League = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    margin-top: 0;
    color: white;
    text-align: center;
  }

  img {
    border-radius: 3px;
    height: 50px;
    margin: 0 auto;
    cursor: pointer;
  }
`;
export const BottomFooter = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 2em;
  justify-content: space-around;
  &::before {
    content: "";
    width: 60%;
    border-top: 1px solid rgb(242, 241, 236, 0.3);
    position: absolute;

    top: 0;
    left: 20%;
  }
`;
export const DesignedByWrapper = styled.div`
  padding: 1em;
  color: white;
  p {
    margin: 0;
  }
  a {
    color: white;
    font-weight: 600;
  }
`;
export const ContactIconsWrapper = styled.div`
  a {
    cursor: pointer;
    &:hover {
    }
  }
  img {
    width: 30px;
    margin-right: 1em;
    transition: 0.5s;
    &:hover {
      transform: scale(1.5);
    }
  }
`;
