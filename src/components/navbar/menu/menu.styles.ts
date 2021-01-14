import styled from 'styled-components';

const MenuStyles = styled.div`
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
    bottom: ${(props) => props?.fixed ? '-2px' : '16px'};
    height: 2px;
    transition: all ease .3s;
    background-color: ${(props) => props.theme.colorRaibownFirst};
    background-image: ${(props) => props.theme.gradientRaibown};
    
`;

export default MenuStyles;