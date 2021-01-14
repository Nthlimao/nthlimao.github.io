import styled, { css } from "styled-components";

const getNavbarStyles = (props) => {
    if (props?.fixed) {
        return css`
            position: fixed;
            padding: 0 15px;
            animation-name: menuFixed;
            animation-duration: 0.6s;
            animation-fill-mode: both;
            background-color: ${(props) => props.theme.colorNeutralWhite};
            border: 2px solid ${(props) => props.theme.colorNeutralLight};
        `;
    }

    return css`
        position: absolute;
    `;
};

interface NavbarProps {
    fixed?: boolean;
}

const NavbarStyles = styled.div<NavbarProps>`
    ${(props) => getNavbarStyles(props)}
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
`;

export const ContainerNavbar = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default NavbarStyles;
