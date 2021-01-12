import styled from "styled-components";

interface LinkProps {
    fixed?: boolean;
}

const LinkStyles = styled.a<LinkProps>`
    color: ${(props) => props?.fixed ? "rgba(255, 255, 255, 0.7)" : "#ffffff"};
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px 12px 8px;
    margin: 0 5px;
    border-radius: 3px;
    transition: all ease 0.3s;
    &:hover,
    &.active {
        transition: all ease 0.3s;
        color: rgb(74, 250, 211);
    }
`;

export default LinkStyles;
