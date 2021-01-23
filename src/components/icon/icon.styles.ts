import styled from 'styled-components';

interface IconProps {
    color?: string;
    width?: string;
    height?: string;
}

const IconStyles = styled.div<IconProps>`
    display: flex;
    align-items: center;
    color: ${(props) => props?.color ? props?.color : '#000000'};
    svg {
        ${(props) => props?.width && `width: ${props?.width};`}
        ${(props) => props?.height && `height: ${props?.height};`}
    }
`;

export default IconStyles;