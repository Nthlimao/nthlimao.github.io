import styled from "styled-components";

const LinkStyles = styled.a`
    display: flex;
    align-items: center;
    padding: 15px 10px;
    text-decoration: none;
    border-radius: 4px;
    transition: all ease 0.3s;
    span {
        display: block;
        margin-left: 15px;
        color: rgba(255, 255, 255, 0.7);
        font-size: 16px;
        line-height: 16px;
        font-weight: 600;
        padding-top: 2px;
        transition: all ease 0.3s;
    }
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        span {
            color: ${(props) => props.theme.colorNeutralWhite};
        }
    }
    &.active {
        span {
            color: ${(props) => props.theme.colorNeutralWhite};
        }
    }
`;

export default LinkStyles;
