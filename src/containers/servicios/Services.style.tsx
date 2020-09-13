import styled from "styled-components";
import { SIZES } from "../../theme";
export const ServicesPage = styled.div`
  padding: 0 5vw;
  section {
    h2 {
      margin: 1em 4em;
      &.titleLeft {
        text-align: left;
      }
      &.titleRight {
        text-align: right;
      }
      @media screen and (max-width: ${SIZES.large}) {
        text-align: center !important;
      }
    }
    .content {
      display: flex;
      flex-direction: row;

      .right {
        margin-left: 2em;
        float: right;
        animation: slice-left 1.5s;
        @media screen and (max-width: ${SIZES.large}) {
          margin: auto 0 !important;
        }
      }
      @keyframes slice-right {
        0% {
          opacity: 0;
          transform: translateX(-100px);
        }
        100% {
          opacity: 1;
          transform: translateX(0px);
        }
      }
      .left {
        margin-right: 2em;
        float: left;
        animation: slice-right 0.5s;
        @media screen and (max-width: ${SIZES.large}) {
          margin: auto 0 !important;
        }
      }
      @keyframes slice-left {
        0% {
          opacity: 0;
          transform: translateX(100px);
        }
        100% {
          opacity: 1;
          transform: translateX(0px);
        }
      }
      @media screen and (max-width: ${SIZES.large}) {
        flex-direction: column;
        margin: 0 !important;
      }
      img {
        width: 400px;
        max-height: 400px;
        max-width: 80vw;
        border-radius: 5px;

        @media screen and (max-width: ${SIZES.large}) {
          flex-direction: column;
          margin: 1em auto;
        }
        margin-bottom: 2em;
      }
      p {
        margin-top: 0;
      }
    }
  }
`;
export const PageTitle = styled.h1`
  margin-top: 2em;
  text-align: center;
  text-transform: uppercase;
`;
