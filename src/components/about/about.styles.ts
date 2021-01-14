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
        background-image: url("${process.env.PUBLIC_URL}/images/nath_profile.jpg");
        background-position: 0 0;
        background-size: cover;
    }
`;

export default AboutStyles;
