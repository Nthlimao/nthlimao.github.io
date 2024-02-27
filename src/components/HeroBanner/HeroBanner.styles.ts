import styled from "styled-components";

const HeroBannerStyles = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const HeroBannerTitle = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.color.neutralLightest};
  font-family: "Henrietta";
  font-size: 24px;
  font-weight: 400;

  @media only screen and (min-width: 375px) {
    font-size: 30px;
    font-weight: 500;
  }

  @media only screen and (min-width: 425px) {
    font-size: 36px;
  }

  @media only screen and (min-width: 700px) {
    font-size: 64px;
  }
  @media only screen and (min-width: 870px) {
    font-size: 82px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 98px;
  }
`;

export const HeroBannerTitleRow = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  &:nth-child(1) {
    margin-left: 28px;
    @media only screen and (min-width: 375px) {
      margin-left: 32px;
    }
    @media only screen and (min-width: 425px) {
      margin-left: 36px;
    }
    @media only screen and (min-width: 700px) {
      margin-left: 60px;
    }
    @media only screen and (min-width: 870px) {
      margin-left: 70px;
    }
  }
  &:nth-child(2) {
    margin-top: -2px;
    margin-bottom: -2px;
    @media only screen and (min-width: 425px) {
      margin-top: -5px;
      margin-bottom: -6px;
    }
    @media only screen and (min-width: 870px) {
      margin-top: -10px;
      margin-bottom: -12px;
    }
  }
  &:nth-child(3) {
    display: inline-flex;
    padding-left: 18px;
    @media only screen and (min-width: 870px) {
      padding-left: 12px;
    }
  }
`;

export const TitleMarked = styled.span`
  padding: 2px 8px 0;
  color: ${(props) => props.theme.color.neutralDarkMedium};
  background-color: ${(props) => props.theme.color.RaibownFirst};
  border-radius: 6px;
  margin: 0 4px;

  @media only screen and (min-width: 700px) {
    border-radius: 12px;
    padding: 4px 14px 0;
  }

  @media only screen and (min-width: 870px) {
    border-radius: 20px;
  }
`;

export const SparklesIcon = styled.span`
  position: absolute;
  top: 8px;
  right: 2px;
  width: 21px;
  height: 21px;
  transform: translateX(100%);
  background-image: url("/assets/images/sparkles.png");
  background-size: contain;
  background-position: 0 0;
  z-index: 2;

  @media only screen and (min-width: 375px) {
    width: 28px;
    height: 28px;
  }

  @media only screen and (min-width: 425px) {
    top: 12px;
    width: 26px;
    height: 26px;
  }

  @media only screen and (min-width: 700px) {
    top: 24px;
    right: 10px;
    width: 56px;
    height: 56px;
  }

  @media only screen and (min-width: 870px) {
    width: 72px;
    height: 72px;
  }

  @media only screen and (min-width: 1024px) {
    width: 88px;
    height: 88px;
  }
`;

export const UnicornIcon = styled.span`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 32px;
  height: 32px;
  transform: translateY(-100%);
  background-image: url("/assets/images/unicorn.png");
  background-size: contain;
  background-position: 0 0;
  z-index: -1;

  @media only screen and (min-width: 375px) {
    width: 36px;
    height: 36px;
  }

  @media only screen and (min-width: 425px) {
    top: 4px;
    left: 4px;
    width: 42px;
    height: 42px;
  }

  @media only screen and (min-width: 700px) {
    top: 7px;
    left: 7px;
    width: 72px;
    height: 72px;
  }

  @media only screen and (min-width: 870px) {
    top: 10px;
    left: 0;
    width: 82px;
    height: 82px;
  }

  @media only screen and (min-width: 1024px) {
    top: 15px;
    left: -10px;
    width: 98px;
    height: 98px;
  }
`;

export default HeroBannerStyles;
