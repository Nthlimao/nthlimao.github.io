import styled from "styled-components";

export { default as theme } from "./theme";

const MainStyles = styled.div`
  .container {
    position: relative;
    width: 100%;
    max-width: 1200px;
    padding-left: 30px;
    padding-right: 30px;
    margin: 0 auto;
    box-sizing: border-box;

    &.container-lg {
      max-width: 1020px;
    }

    &.container-md {
      max-width: 780px;
    }
  }
`;

export default MainStyles;
