import styled from "styled-components";
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
`;
export const ContactInformation = styled.div`
  p {
    font-size: 12px;
    margin: 0px;
    color: white;
    font-weight: 600;
    line-height: 1.5em;
  }
`;
export const Sponsors = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    margin-top: 0;
    color: white;
  }
  .images {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  img {
    border-radius: 3px;
    width: 50px;
    height: 50px;
    margin-right: 1em;
    cursor: pointer;
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
