import styled from "styled-components";

const HeaderStyles = styled.div`
    position: relative;
    display: block;
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    background-image: url("${process.env.PUBLIC_URL}/images/banner.jpg");
    margin-bottom: 80px;
`;

export const HeaderContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-bottom: 8%;
    background: rgba(20, 20, 24, 0.95);
`;

export const HeaderSubtitle = styled.h3`
    color: ${(props) => props.theme.colorNeutralLight};
    font-family: ${(props) => props.theme.fontFamilyHighlight};
    font-size: 32px;
    line-height: 32px;
    padding: 0 10px;
    margin-bottom: 20px;
`;

export const HeaderTitle = styled.h1`
    .Typewriter {
        .Typewriter__cursor {
            font-family: ${(props) => props.theme.fontFamilyHighlight};
            font-size: 80px;
            line-height: 80px;
            font-weight: bold;
            color: ${(props) => props.theme.colorRaibownSeventh};
        }

        .Typewriter__wrapper {
            font-family: ${(props) => props.theme.fontFamilyHighlight};
            font-size: 80px;
            line-height: 80px;
            font-weight: bold;
            background: ${(props) => props.theme.gradientRaibown};
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            padding: 0 5px;
        }
    }
`;

export default HeaderStyles;
