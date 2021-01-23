import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, MainStyles } from "./styles";
import Desktop from "./components/desktop";

const Main = () => {
    return (
        <ThemeProvider theme={theme}>
            <MainStyles>
                <Desktop />
            </MainStyles>
        </ThemeProvider>
    );
};

export default Main;
