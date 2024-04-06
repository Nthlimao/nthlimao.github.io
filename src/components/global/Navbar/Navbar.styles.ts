import styled from "styled-components";

const NavbarStyles = styled.div`
  position: absolute;
  padding: 20px 0;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  margin-bottom: 20px;
`;

export const NavbarInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarMenuItem = styled.li`
  padding: 10px;
  font-family: ${(props) => props.theme.font.familyHighlight};
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${(props) => props.theme.color.neutralMedium};

  &.active {
    color: ${(props) => props.theme.color.neutralLightest};
  }

  &:hover {
    background-color: ${(props) => props.theme.color.neutralDarkMedium};
    border-radius: 4px;
  }

  &:nth-child(1):hover {
    color: ${(props) => props.theme.color.RaibownFirst};
  }
  &:nth-child(2):hover {
    color: ${(props) => props.theme.color.RaibownThird};
  }
  &:nth-child(3):hover {
    color: ${(props) => props.theme.color.RaibownFourth};
  }
  &:nth-child(4):hover {
    color: ${(props) => props.theme.color.RaibownFifth};
  }
`;

export default NavbarStyles;
