import styled from "styled-components";

const HeroBannerStyles = styled.div`
  position: relative;
  display: flex;
  align-items: end;
  padding: 0;
  width: 100%;
  height: 100vh;
  background-image: url("/assets/images/desktop.jpg");
  background-size: cover;
  background-position: left;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(6, 6, 10, 0.95);
    z-index: 0;
  }
`;

export const HeroBannerTitle = styled.h1`
  position: relative;
  display: inline-block;
  color: ${(props) => props.theme.color.neutralLightest};
  font-family: "Henrietta";
  font-size: 42px;
  line-height: 38px;
  font-weight: 400;
  padding-bottom: 80px;
  z-index: 1;

  @media only screen and (min-width: 375px) {
    font-size: 64px;
    line-height: 56px;
  }

  @media only screen and (min-width: 425px) {
    font-size: 68px;
    line-height: 60px;
  }

  @media only screen and (min-width: 870px) {
    font-size: 84px;
    line-height: 69px;
  }

  b {
    font-weight: 400;
    color: ${(props) => props.theme.color.RaibownFirst};
  }
`;

export default HeroBannerStyles;
