import styled from "styled-components";

const ScrollDownStyles = styled.div`
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    padding: 10px 3px;
    background-color: rgba(74, 250, 211, 0.15);
    border-radius: 50px;
    cursor: pointer;
`;

export const IconWrapper = styled.div`
    animation-name: moveChevron;
    animation-duration: 2.3s;
    animation-fill-mode: both;
    animation-delay: 0.5s;
    animation-iteration-count: infinite;

    @keyframes moveChevron {
        0% {
            transform: translateY(-3px);
        }
        50% {
            transform: translateY(3px);
        }
        100% {
            transform: translateY(-3px);
        }
    }
`;

export default ScrollDownStyles;
