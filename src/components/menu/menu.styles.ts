import styled, { css } from "styled-components";

const getMenuBarStyles = (props) => {
    if (props?.fixed) {
        return css`
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            padding: 0 15px;
            animation-name: menuFixed;
            animation-duration: .6s;
            animation-fill-mode: both;
            background-color: rgb(14, 14, 18);

            @keyframes menuFixed {
                from {
                    transform: translateY(-100%);
                }
                to {
                    transform: translateY(0);
                }
            }
        `;
    }

    return css`
        position: absolute;
        top: 0;
        left: 15px;
        right: 15px;
    `;
}

interface MenuProps {
    fixed?: boolean;
}

const MenuBarStyles = styled.div<MenuProps>`
    ${(props) => getMenuBarStyles(props)}
    z-index: 9999;
`;

export const MenuContent = styled.div`
    display: flex;
    height: 70px;
    max-width: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const LogoImage = styled.img`
    display: block;
    width: auto;
    height: 28px;
`;

export const MenuStyles = styled.ul`
    position: relative;
    display: flex;
    align-items: center;
    padding: 16px 0;
`;


interface LineProps {
    fixed?: boolean;
    width?: number;
    left?: number;
}

export const LineMenuFixed = styled.div<LineProps>`
    position: absolute;
    left: ${(props) => props?.left ? `${props.left}px` : 0};
    width: ${(props) => props?.width ? `${props.width}px` : 0};
    bottom: ${(props) => props?.fixed ? 0 : '16px'};
    height: 3px;
    transition: all ease .3s;
    background-color: #4AFAD3;
    background-image: linear-gradient(to right, #4AFAD3 , #00CB9E)
`;

export default MenuBarStyles;
