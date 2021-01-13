import styled from "styled-components";

interface ProgressProps {
    width?: string;
}

const ProgressStyles = styled.div<ProgressProps>`
    position: relative;
    width: 100%;
    height: 8px;
    background-color: #141418;
    border-radius: 10px;
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 8px;
        border-radius: 10px;
        background-color: #00cb9e;
        background-image: linear-gradient(to right, #00cb9e, #4afad3);
        width: ${(props) => props.width || "0"};
    }
`;

export default ProgressStyles;
