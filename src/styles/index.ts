import styled from "styled-components";
export { default as theme } from "./theme";

export const MainStyles = styled.div`
    position: relative;
    font-family: ${(props) => props.theme.fontFamilyBase};
    max-width: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.colorNeutralDark};

    img {
        max-width: 100%;
    }

    .container {
        position: relative;
        width: 100%;
        max-width: 640px;
        padding-right: 10px;
        padding-left: 10px;
        margin: 0 auto;
        box-sizing: border-box;
    }

    /* ANIMATIONS */

    @keyframes menuFixed {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0);
        }
    }
`;

export default MainStyles;
