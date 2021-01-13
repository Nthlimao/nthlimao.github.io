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

export const ContentHeader = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(20, 20, 24, 0.95);
`;

export const TypewriterWrapper = styled.div`
    .Typewriter {
        .Typewriter__cursor {
            font-family: "Montserrat", sans-serif;
            font-size: 90px;
            font-weight: bold;
            color: #ffe659;
        }
    
        .Typewriter__wrapper {
            font-family: "Montserrat", sans-serif;
            font-size: 90px;
            font-weight: bold;
            background: linear-gradient(90deg,#4fcbcb 0,#29cbd8 15%,#24badc 30%,#947dbb 45%,#f896c3 55%,#ffcc7d 75%,#ffe659 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-stroke: 4px transparent;
            color: #1a1a1f;
            padding: 0 5px;
        }
    }
`;

export default HeaderStyles;
