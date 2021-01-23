import styled from "styled-components";

const SidebarStyles = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    flex-shrink: 1;
    background-color: ${(props) => props.theme.colorBrandDark};
`;

export const SidebarHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
`;

export const SidebarFooter = styled.div`
    height: 100px;
`;

export default SidebarStyles;
