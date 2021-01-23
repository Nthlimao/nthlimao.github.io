import styled from "styled-components";

const AboutStyles = styled.div`
    margin-bottom: 80px;
`;

export const AboutContainer = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: flex-start;
`;

export const AboutText = styled.div`
    flex: 0 0 50%;
    margin-bottom: 40px;
    h2 {
        font-family: ${(props) => props.theme.fontFamilyHighlight};
        color: ${(props) => props.theme.colorNeutralBlack};
        font-size: 32px;
        line-height: 32px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 20px;
    }
    p {
        color: ${(props) => props.theme.colorNeutralDark};
        font-size: 18px;
        line-height: 25px;
    }
`;

export const AboutImage = styled.div`
    flex: 0 0 50%;
    .nath-cover {
        height: 100%;
        margin-left: 80px;
        /* background-image: url("${process.env
            .PUBLIC_URL}/images/nath_profile.jpg"); */
        background-position: 0 0;
        background-size: cover;
    }
`;

export const AboutContentStyles = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        width: 70%;
        padding-top: 70%;
        border-radius: 100%;
        transform: translate(50%, -50%);
        background: ${(props) => props.theme.gradientRaibown};
        z-index: 0;
        opacity: 0.2;
    }
    &::before {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        width: calc(70% - 10px);
        padding-top: calc(70% - 10px);
        border-radius: 100%;
        transform: translate(50%, -50%);
        background: ${(props) => props.theme.colorNeutralDark};
        z-index: 1;
    }
`;

export const AboutContentInner = styled.div`
    position: relative;
    z-index: 3;
    h2 {
        font-family: ${(props) => props.theme.fontFamilySpecial};
        color: ${(props) => props.theme.colorBrandPure};
        font-size: 48px;
        line-height: 48px;
        font-weight: 400;
        margin-bottom: 20px;
        text-align: right;
    }
    p {
        color: ${(props) => props.theme.colorNeutralLightest};
        font-size: 18px;
        font-weight: 300;
        line-height: 25px;
        text-align: right;
    }
`;

export const AboutAppendStyles = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 70%;
        padding-top: 70%;
        border-radius: 100%;
        transform: translate(-50%, -50%);
        background: ${(props) => props.theme.gradientRaibown};
        z-index: 0;
        opacity: 0.2;
    }
    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: calc(70% - 10px);
        padding-top: calc(70% - 10px);
        border-radius: 100%;
        transform: translate(-50%, -50%);
        background: ${(props) => props.theme.colorNeutralDark};
        z-index: 1;
    }
`;

export const AboutAppendInner = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: 30px;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    box-sizing: border-box;
    z-index: 3;
    .container {
        height: 800px;
        max-height: 100%;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: left;
        margin: 0;
    }
`;

export default AboutStyles;
