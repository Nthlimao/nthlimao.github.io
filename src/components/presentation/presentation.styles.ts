import styled from "styled-components";

const PresentationStyles = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`;

export const ContentStyles = styled.div`
    width: 100%;
`;

export const PresentationTitle = styled.h1`
    font-family: ${(props) => props.theme.fontFamilyHighlight};
    font-size: 64px;
    line-height: 68px;
    font-weight: normal;
    color: ${(props) => props.theme.colorNeutralWhite};
    .Typewriter {
        .Typewriter__cursor {
            font-family: ${(props) => props.theme.fontFamilyHighlight};
            font-size: 64px;
            line-height: 68px;
            font-weight: bold;
            color: ${(props) => props.theme.colorRaibownSeventh};
        }

        .Typewriter__wrapper {
            font-family: ${(props) => props.theme.fontFamilyHighlight};
            font-size: 64px;
            line-height: 68px;
            font-weight: normal;
            background: ${(props) => props.theme.gradientRaibown};
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`;

export const AppendStyles = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-position: center;
    background-image: url("${process.env.PUBLIC_URL}/images/banner.jpg");
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.95;
        background-color: ${(props) => props.theme.colorNeutralDarkest};
    }
`;

export default PresentationStyles;
