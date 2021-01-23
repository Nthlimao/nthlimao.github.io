import styled from "styled-components";

const MenuStyles = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 15px;
`;

interface LineProps {
    top?: number;
}

export const LineMenuFixed = styled.div<LineProps>`
    position: absolute;
    top: ${(props) => (props?.top ? `${props.top}px` : 0)};
    width: 3px;
    height: 48px;
    right: 0;
    transition: all ease 0.3s;
    background-color: ${(props) => props.theme.colorNeutralWhite};
`;

export default MenuStyles;
