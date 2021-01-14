import styled, { css } from "styled-components";

const getActiveStyles = (props) => {
    if (props?.fixed) {
        return css`
            color: ${props.theme.colorNeutralBlack};
        `;
    }

    return css`
        background: ${props.theme.gradientRaibown};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `;
};

interface LinkProps {
    fixed?: boolean;
}

const LinkStyles = styled.a<LinkProps>`
    color: ${(props) => props.theme.colorNeutralMedium};
    font-family: ${(props) => props.theme.fontFamilyHighlight};
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    padding: 10px 12px 8px;
    margin: 0 5px;
    border-radius: 3px;
    transition: all ease 0.3s;
    &:hover,
    &.active {
        ${(props) => getActiveStyles(props)}
        transition: all ease 0.8s;
    }
`;

export default LinkStyles;
